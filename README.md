## What is this?

> This is a study for deriving a new type of code challenge from a normalised workflow for "tasking a sample react app with modern tools", that actually covers the E2E / full stack process for fetching, displaying, testing and composing a product. This helps to better estimate sprint loads and/or interview full stack engineers in a qualitative way.

> ![coinglaze_timelapse_01_small](https://user-images.githubusercontent.com/2397125/52868246-11a35f00-3143-11e9-9dfe-d4816f587cc4.gif)
 
> Time-Lapse of my creation process is recorded from first commit to completion for dissection; annotated according to gitmoji. I will upload the video at some time. 

### Stack Challange
- React 16.7 (incl. Hooks & Suspense)
- Apollo / GraphQL (using apollo-link-rest)
- Endpoint with a n+1 aggregation challange (in this case, coinbase.com)
- Sketch App (mocking and interfacing with design; creation of a design system)
- Styled-Components for implementing a responsive design system

### Testing / Quality Assurance
- Cypress with Mocha & Chai (E2E incl. Unit-Testing)
- Storybook (component composition strategy & design system validation)

-------

## Coinglaze - Code Challange

### How to run
 - `yarn install`
 - `yarn start` then,for BDD testing
 - `yarn cypress:open`

### _Task_

 - [X] Create a single page application
 - [X] Using the React Framework
 - [X] Fetch and Display 24h product data from coinbase.com
     - [X] GET /products to get a list of coinbase pairs
     - [X] GET /{id}/stats to get the 24 hours stats of a specific product
 - [X] Illustrate Testing Strategies
     - [X] Assumption: T/BDD
     - [ ] Acceptance tests as E2E
     - [x] Basic unit/component tests
  - [x] Should be responsive (mobile / web)

### _User Storys_
 - [ ] **Epic**: As a user, I want to be able to open coinglaze in a web browser.
    - [X] As a user, I can open the website in a modern web browser.
    - [ ] As a user, visiting the website with a modern web browser in HD (1080p) resultion displays the website correctly.
    - [ ] As a user, visiting the website on a modern smartphone (340p) displays the website correctly.
  - [ ] **Epic**: As a user, I want to be able to see a list of crypto currencies with their 24h stats in my base currency
    - [ ] As a user, I can choose my base currency.
    - [ ] As a user, I can see a list of crypto currencies.
    - [ ] As a user, I can select a crypto currency.
    - [ ] As a user, I see the 24h stats of the crypto currency in my base currency, when selected.

# _Solution_

##### Situation
 - The task involves a typical n+1 query problem. First the product list, then the product stats need to be fetched; leading to request overhead of n(n-1) with potential for optimisation for base-target currency pairs.
 - The display of results should be responsive

##### Analysis (Complication)
- To mitigate the issue of concurrent requests, batching (resolving all possibilities in "one" fetch) is a typical solution to reduce overhead. The other is a tired / just in time fetching approach with a caching solution derived from expected user behaviour. 
- From a user perspective, it is unlikely that I will have interest in the relationship of all n*n relationships of currency pairs, since a user is with highest probability focused one or two pairs. I.e. EUR and USD.
- Therefore, I will chose a tired solution in which the users base currency is the first layer (or a default, such as EUR) and the pair resolution a product of that.
- Also, regarding responsiveness, flexbox or css grids are not available in older browsers. Therefore...

##### Architecture (Solution)
- ... I make the assumption of targeting evergreen browsers, which is in general the proper approach for start-ups and go to market strategies.
- As per task, I will use create-react-app for instantiating a new project
- I will use cypress.io test runner to formulate (TDD)
  - acceptance/integration tests
  - select user currency of available coinbase base currency
  - show list list of pairs with
  - all info available from /stats
  - unit tests
  - component display etc.
- As an architect, I want to have a proper caching solution and will therefore rely on apollo-link-rest to perform incremental cacheing and joining of the data to minimize bandwidth; while profiting of extensive unit tests.
- I will go for a flexbox based design via a tree-shakable UI library and will be using styled-system for granular responsive controls

##### Limitations
- This architecture assumes
  - No infinite product or stats list (aka, no pagination)
  - No server side render (no re-hydration)
  - No progressive web-features (no service workers)
- Production implementations would use an apollo/prisma/ralay or similar server to join multiple endpoints and proxy only absolutely necessary data for web and mobile clients. Also avoiding unnecessary load on coinbase
