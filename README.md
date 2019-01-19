# Coinglaze - Code Challange

### How to run
 - `yarn install`
 - `yarn start` then,for BDD testing
 - `yarn cypress:open`

### _Task_

 - [X] Create a single page application
 - [X] Using the React Framework
 - [ ] Should be responsive
 - [ ] Fetch and Display 24h product data from coinbase.com
     - [ ] GET /products to get a list of coinbase pairs
     - [ ] GET /{id}/stats to get the 24 hours stats of a specific product
 - [X] Illustrate Testing Strategies
     - [X] Assumption: T/BDD
     - [ ] Acceptance tests as E2E
     - [ ] Basic unit/component tests
  - [ ] Should be responsive (mobile / web)

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

