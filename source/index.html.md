---
title: Constellation Brands API Catalog

/*language_tabs:
  - shell
  - ruby
  - python
  - javascript*/

toc_footers:
  - <a href='#'>Contact Us</a>
  - <p>&copy; 2017 Constellation Brands, Inc.</p>

includes:
  - bottleShots

search: true
---

# Getting Started

Constellation Brands APIs provide instant access to a variety of datasets including Items, Brands, and Worker Demographics. Explore the available APIs to see setup instructions and sample responses.

##Accessing Our APIs

Most Constellation Brands APIs require an API key. Some APIs containing sensitive data will require additional authentication, as outlined in the documentation below. You will receive an API key and additional instructions via email once approved.

###How to Register and Authenticate

> Example API request using cURL:

```shell
curl "https://mocksvc.mulesoft.com/what/is/the/url/1.0/items/1002"
  -H "Authorization: YourAPIKey"
```

> The above command returns the following JSON:

```json
{
  "beverageSegmentCode": "100",
  "beverageSegmentDescription": "WINE",
  "brandCode": "343",
  "gtin": "620654020010",
  "id": "1002",
  "itemCode": "100",
  "itemDescription": "INNA EST RIES VQA 750/12",
  "subBrandCode": "2391",
  "typeCode": "102",
  "universalSKUCode": "23011",
  "universalSKUDescription": "INNISKILLIN NIAGARA EST COL RIESLING 750ML",
  "upc": "062065402001",
  "varietalBlendCode": "632",
  "vintageDescription": "N/A"
}
```

1. <a href="#">Request an API key</a> by providing information about your application
2. The Constellation Brands API team will review your request and respond via email with an API key
3. Make an API request with the following header attributes to authenticate your call:

Header Name | Description | Example
-------------- | -------------- | --------------
client_id | ID provided by CBI upon registration | 4eb335ddb09f56260ec913551b2496ac
client_secret | API key provided by CBI upon registration | a822f98b5a468de741773710f7925141