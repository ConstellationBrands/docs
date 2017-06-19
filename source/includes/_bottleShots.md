# <i class="fa fa-picture-o wide-icon" aria-hidden="true"></i>Bottle Shots API

> https://api.cbrands.com/api/1.0/bottleShots

This API returns promotional product images ("bottle shots") from the Constellation Brands Global Brand Center. It includes some identifying information about the product as well as a variety of image formats:

* Mini image (PNG)
* Standard final JPEG (JPG)
* Web image (full-size PNG)

The API can return a specific product (based on GTIN) or all product images modified since a specific date.

###Authentication

The Bottle Shots API requires only an API key for authentication. Submit a request for a key and use it as shown in the requests below.

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#requestKeyModal">
  <i class="fa fa-key wide-icon" aria-hidden="true"></i>Request an API Key
</button>

###Result Details
The following attributes are returned by the Bottle Shots API:

Attribute Name | Description | Type
--------- | ------- | -----------
id | 35-digit item ID from Global Brand Center | string
name | Product name from Global Brand Center | string
dateCreated | Date and time this bottle shot was added to Global Brand Center | string
datePublished | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
dateModified | Date and time this bottle shot was last modified | string
extension | File extension of the original image | string
upc | Full UPC (barcode) value for the product | string
brandFamily | Brand family description for the product | string
brand | Brand name description for the product | string
varietal | Numeric varietal code | string
vintage | Vintage year, if specified in Global Brand Center | string
itemSize | Product volume in mL, unless otherwise noted | string
webImage | URL for the full-size PNG bottle shot | string
miniImage | URL for the PNG thumbnail image | string
standardFinalJpeg | URL for the full-size JPG bottle shot | string
thul | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
transparentPNG | URL for the full-size PNG bottle shot | string

The response also includes the following header information:

Variable | Description | Type
--------- | ------- | -----------
X-CBI-NumberOfRecords | The number of records requested - default 50 if not specified | integer
X-CBI-Page | Offset page for results, Nth set of results - default 1 if not specified | integer

## Get All Bottle Shots

> https://api.cbrands.com/api/1.0/bottleShots will return the following JSON:

```json
[
  {
    "brand": "Chateau Smith",
    "brandFamily": "Charles Smith",
    "dateCreated": "2017-01-05T21:10:18Z",
    "dateModified": "2017-01-06T16:24:26Z",
    "datePublished": "2016-12-16T18:12:09Z",
    "extension": "psd",
    "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
    "itemSize": "750",
    "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
    "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
    "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
    "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
    "upc": "184745000126",
    "varietal": "Cabernet Sauvignon",
    "vintage": "2014",
    "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
  }
  {
    "brand": "Chateau Smith",
    "brandFamily": "Charles Smith",
    "dateCreated": "2017-01-05T21:10:18Z",
    "dateModified": "2017-01-06T16:24:26Z",
    "datePublished": "2016-12-16T18:12:09Z",
    "extension": "psd",
    "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
    "itemSize": "750",
    "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
    "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
    "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
    "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
    "upc": "184745000126",
    "varietal": "Cabernet Sauvignon",
    "vintage": "2014",
    "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
  }
]
```

Retrieves all bottle shots that have been modified since the specified date.

### HTTP Request

`https://api.cbrands.com/api/1.0/bottleShots`

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
dateModified | Retrieve all bottle shots modified after this time | datetime
apiKey | The API key you received upon registration | string

<aside class="warning">
  This request requires an API key to be included in the query parameters.
</aside>

## Get a Specific Bottle Shot

> https://api.cbrands.com/api/1.0/bottleShots/184745000126 will return the following JSON:

```json
{
  "brand": "Kim Crawford",
  "brandFamily": "Kim Crawford",
  "dateCreated": "2017-02-16T20:29:25Z",
  "dateModified": "2017-02-16T20:29:53Z",
  "datePublished": "2013-04-23T18:20:43Z",
  "extension": "psd",
  "id": "EF550946-3A61-4B36-B238B6F6C36D7EB8",
  "itemSize": "750",
  "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/b9e2caeb-0bb0-446c-a32e-70c4904e8206/mini-C94F8787-B4BB-4899-95B2C5F56D22F85E.png",
  "name": "2016 KIM Rosé 750ml Bottle Shot - New Package",
  "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/b9e2caeb-0bb0-446c-a32e-70c4904e8206/Standard Final JPG-KIM_Rose_750ml_2016_CBI_30333.jpg",
  "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/b9e2caeb-0bb0-446c-a32e-70c4904e8206/thul-FA4E2B9F-DC56-4C0D-99442DC51BE1D0C5.png",
  "upc": "",
  "varietal": "Rose",
  "vintage": "2016",
  "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/b9e2caeb-0bb0-446c-a32e-70c4904e8206/webimage-B92EABA4-EB8B-4F73-A22664CE2D9D03C1.png"
}
```

This endpoint retrieves a specific bottle shot based on the product's GTIN.

### HTTP Request

`https://api.cbrands.com/api/1.0/bottleShots/{gtin}`

### URI Parameters

Parameter | Decription | Type
--------- | ------- | -----------
gtin | The GTIN of the product to retrieve | string

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
apiKey | The API key you received upon registration | string
numberOfRecords | The number of records to retrieve - default 50 if not specified | integer
page | Offset page for results, return Nth set of results - default 1 if not specified | integer

### Header Variables

Header variables are optional and can be used instead of query parameters. Header variables will override query parameters if both are used.

Variable | Description | Type
--------- | ------- | -----------
X-CBI-NumberOfRecords | The number of records to retrieve - default 50 if not specified | integer
X-CBI-Page | Offset page for results, return Nth set of results - default 1 if not specified | integer

<aside class="warning">
  This request requires an API key to be included in the query parameters.
</aside>

<div class="modal" id="requestKeyModal" tabindex="-1" role="dialog" aria-labelledby="requestKeyModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="requestKeyModalLabel">Request an API Key</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form id="requestForm" method="post">
        <div class="modal-body">
          <div class="form-group">
            <label for="apiSelect">Requested API</label>
            <select class="form-control" id="apiSelect" name="apiSelect">
              <option>Bottle Shots API</option>
            </select>
          </div>
          <div class="form-group">
            <label for="name-input">Name</label>
            <input class="form-control" type="text" id="name-input" name="name">
          </div>
          <div class="form-group">
            <label for="email-input">Email address</label>
            <input type="email" class="form-control" id="email-input" name="email">
          </div>
          <div class="form-group">
            <label for="phone-input">Phone number</label>
            <input type="tel" class="form-control" id="phone-input" name="phone">
          </div>
          <div class="form-group">
            <label for="optional-input">Additional detail (optional)</label>
            <textarea class="form-control" id="optional-input" name="optional" rows="3" placeholder="Application name, estimated number of API calls, etc."></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary" id="submit">Request Key</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Success!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <h1><i class="fa fa-check-circle-o fa-4" aria-hidden="true"></i></h1>
            </div>
            <div class="col-md-10">
              <p style="padding-top: 5px;">We received your request. We'll get back you you as soon as possible with an API key and additional instructions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="failureModal" tabindex="-1" role="dialog" aria-labelledby="failureModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Something went wrong.</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <h1><i class="fa fa-times-circle-o fa-4" aria-hidden="true"></i></h1>
            </div>
            <div class="col-md-10">
              <p style="padding-top: 5px;">Whoops! Looks like there was an error while sending your API key request.</p>
              <p>Please contact us directly at <a href="mailto:api-support@cbrands.com">api-support@cbrands.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>