# <i class="fa fa-picture-o wide-icon" aria-hidden="true"></i>Product API

> https://api.cbrands.com/v3/items

This API returns information about our Products including, but not limited to:

* Item identification information (SKUs, UPCs, GTINs, COLAs, etc)
* Item descriptions
* Varietal information
* Item sizes
* Digital assets (bottle shots, tasting notes)


###Authentication

The Product API requires only an API key for authentication. Submit a request for a key and use it as shown in the requests below.

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#requestKeyModal">
  <i class="fa fa-key wide-icon" aria-hidden="true"></i>Request an API Key
</button>


## Get All Items

> https://api.cbrands.com/v3/items will return the following JSON:

```json
[
    {
        "id": "10",
        "shortCode": "10",
        "shortDescription": "HERM FORW ICB 750/12",
        "longCode": "003202",
        "longDescription": "UNKNOWN",
        "masterSkuDescription": "HERM FORW ICB 750/12",
        "masterSkuCode": "003202",
        "subBrandCode": "1376",
        "subBrandDescription": "HERMIT",
        "brandCode": "327",
        "brandDescription": "HERMIT",
        "brandFamilyCode": "296",
        "brandFamilyDescription": "HERMIT",
        "brandOwnerCode": "103",
        "brandOwnerDescription": "CONSTELLATION BRANDS CANADA, INC.",
        "upcNumber": "006365700360",
        "gtin": "063657003602",
        "masterPackageCode": "327-219-999",
        "masterPackageDescription": "HERMIT 750 N/A",
        "universalSkuCode": "22894",
        "universalSkuDescription": "HERMIT APERA 750ML",
        "beverageType": "WINE",
        "varietalBlendCode": "BR2",
        "varietalBlendDescription": "FORTIFIED WINE",
        "varietalClassCode": "999",
        "varietalClassDescription": "N/A",
        "accountSegmentSubBrandCode": "UNK",
        "accountSegmentSubBrandDescription": "UNKNOWN",
        "vintageCode": "999",
        "vintageDescription": "N/A",
        "packageTypeCode": "102",
        "packageTypeDescription": "GLASS",
        "singleServePackage": false,
        "item02Description": "UNKNOWN",
        "item01Code": "10",
        "item02Code": "003202",
        "item01Description": "HERM FORW ICB 750/12"
    },
    {
        "id": "100",
        "shortCode": "100",
        "shortDescription": "INNA EST RIES VQA 750/12",
        "longCode": "083790",
        "longDescription": "UNKNOWN",
        "masterSkuDescription": "INNA EST RIES VQA 750/12",
        "masterSkuCode": "083790",
        "subBrandCode": "2391",
        "subBrandDescription": "INNISKILLIN NIAGARA EST COL",
        "brandCode": "343",
        "brandDescription": "INNISKILLIN NIAGARA",
        "brandFamilyCode": "309",
        "brandFamilyDescription": "INNISKILLIN",
        "brandOwnerCode": "103",
        "brandOwnerDescription": "CONSTELLATION BRANDS CANADA, INC.",
        "upcNumber": "062065402001",
        "gtin": "620654020010",
        "masterPackageCode": "343-219-999",
        "masterPackageDescription": "INNISKILLIN NIAGARA 750 N/A",
        "universalSkuCode": "23011",
        "universalSkuDescription": "INNISKILLIN NIAGARA EST COL RIESLING 750ML",
        "beverageType": "WINE",
        "varietalBlendCode": "632",
        "varietalBlendDescription": "RIESLING",
        "varietalClassCode": "999",
        "varietalClassDescription": "N/A",
        "accountSegmentSubBrandCode": "UNK",
        "accountSegmentSubBrandDescription": "UNKNOWN",
        "vintageCode": "999",
        "vintageDescription": "N/A",
        "packageTypeCode": "102",
        "packageTypeDescription": "GLASS",
        "singleServePackage": false,
        "item02Description": "UNKNOWN",
        "item01Code": "100",
        "item02Code": "083790",
        "item01Description": "INNA EST RIES VQA 750/12"
    },
    {
        "id": "100806",
        "shortCode": "100806",
        "shortDescription": "WB SVB CA 750/12 2CL",
        "longCode": "100806",
        "longDescription": "CA 2CL",
        "masterSkuDescription": "WB SVB CA 750/12",
        "masterSkuCode": "80002186",
        "subBrandCode": "1917",
        "subBrandDescription": "WOODBRIDGE BY ROBERT MONDAVI",
        "brandCode": "631",
        "brandDescription": "WOODBRIDGE BY ROBERT MONDAVI",
        "brandFamilyCode": "466",
        "brandFamilyDescription": "ROBERT MONDAVI",
        "brandOwnerCode": "100",
        "brandOwnerDescription": "CONSTELLATION BRANDS US OPERATIONS, INC",
        "upcNumber": "008600386186",
        "gtin": "086003861862",
        "masterPackageCode": "631-219-999",
        "masterPackageDescription": "WOODBRIDGE BY ROBERT MONDAVI 750 N/A",
        "universalSkuCode": "21715",
        "universalSkuDescription": "WOODBRIDGE BY ROBERT MONDAVI SAUVIGNON BLANC 750ML",
        "beverageType": "WINE",
        "varietalBlendCode": "667",
        "varietalBlendDescription": "SAUVIGNON BLANC",
        "varietalClassCode": "114",
        "varietalClassDescription": "FUME/SAUVIGNON BLANC",
        "accountSegmentSubBrandCode": "138",
        "accountSegmentSubBrandDescription": "WOODBRIDGE BY ROBERT MONDAVI 750ML",
        "vintageCode": "999",
        "vintageDescription": "N/A",
        "packageTypeCode": "102",
        "packageTypeDescription": "GLASS",
        "singleServePackage": false,
        "item02Description": "CA 2CL",
        "item01Code": "100806",
        "item02Code": "100806",
        "item01Description": "WB SVB CA 750/12 2CL"
    }
]
```

Retrieves all items, limited to a specified (or defaulted) number of records.

### HTTP Request

`https://api.cbrands.com/v3/items`

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
apiKey | The API key you received upon registration | string
numberOfRecords | The number of records to retrieve - default 50 if not specified | integer
recordIndex | The index of the first record to return (1 based) - default 1 if not specified | integer

<aside class="warning">
  This request requires an API key to be included in the query parameters.
</aside>

## Get a Specific Item

> https://api.cbrands.com/v3/items/100806 will return the following JSON:

```json
{
    "id": "100806",
    "shortCode": "100806",
    "shortDescription": "WB SVB CA 750/12 2CL",
    "longCode": "100806",
    "longDescription": "CA 2CL",
    "masterSkuDescription": "WB SVB CA 750/12",
    "masterSkuCode": "80002186",
    "subBrandCode": "1917",
    "subBrandDescription": "WOODBRIDGE BY ROBERT MONDAVI",
    "brandCode": "631",
    "brandDescription": "WOODBRIDGE BY ROBERT MONDAVI",
    "brandFamilyCode": "466",
    "brandFamilyDescription": "ROBERT MONDAVI",
    "brandOwnerCode": "100",
    "brandOwnerDescription": "CONSTELLATION BRANDS US OPERATIONS, INC",
    "upcNumber": "008600386186",
    "gtin": "086003861862",
    "masterPackageCode": "631-219-999",
    "masterPackageDescription": "WOODBRIDGE BY ROBERT MONDAVI 750 N/A",
    "universalSkuCode": "21715",
    "universalSkuDescription": "WOODBRIDGE BY ROBERT MONDAVI SAUVIGNON BLANC 750ML",
    "beverageType": "WINE",
    "varietalBlendCode": "667",
    "varietalBlendDescription": "SAUVIGNON BLANC",
    "varietalClassCode": "114",
    "varietalClassDescription": "FUME/SAUVIGNON BLANC",
    "accountSegmentSubBrandCode": "138",
    "accountSegmentSubBrandDescription": "WOODBRIDGE BY ROBERT MONDAVI 750ML",
    "vintageCode": "999",
    "vintageDescription": "N/A",
    "packageTypeCode": "102",
    "packageTypeDescription": "GLASS",
    "singleServePackage": false,
    "item02Description": "CA 2CL",
    "item01Code": "100806",
    "item02Code": "100806",
    "item01Description": "WB SVB CA 750/12 2CL"
}
```

This endpoint retrieves a specific item based on the item's id.

### HTTP Request

`https://api.cbrands.com/v3/items/{itemId}`

### URI Parameters

Parameter | Decription | Type
--------- | ------- | -----------
itemId | The ID of the item to retrieve | string

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
apiKey | The API key you received upon registration | string

## Get an Item's Digital Assets

> https://api.cbrands.com/v3/items/100806/digitalAssets will return the following JSON:

```json
{
    "bottleShots": [
        {
            "brand": "Woodbridge by Robert Mondavi",
            "brandFamily": "Robert Mondavi",
            "dateCreated": "2016-01-19T16:09:49Z",
            "dateModified": "2018-01-31T14:52:03Z",
            "datePublished": "2016-01-19T19:02:00Z",
            "extension": "psd",
            "id": "E8AB533B-905E-45C8-8529B6968612A879",
            "itemSize": "750",
            "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/E8AB533B-905E-45C8-8529B6968612A879/C035386D-3C5D-4143-9865629944AE141B/mini-00895962-0507-4A92-B5FFBBE37835C3D6.png",
            "name": "WBR Sauvignon Blanc 750ml Bottle Shot with Capsule",
            "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/E8AB533B-905E-45C8-8529B6968612A879/Standard Final JPG-WBR_750ml_SauvBlanc_wcapsule_NV.jpg",
            "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/E8AB533B-905E-45C8-8529B6968612A879/C035386D-3C5D-4143-9865629944AE141B/thul-0D228C38-39B1-4C21-AFF1232D430B6DD0.png",
            "upc": "086003861862",
            "varietal": "Sauvignon Blanc",
            "vintage": "",
            "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/E8AB533B-905E-45C8-8529B6968612A879/C035386D-3C5D-4143-9865629944AE141B/webimage-5B3DA1F1-13EC-490B-9C1F1F089F22CA50.png",
            "transparentPNG": null
        }
    ],
    "tastingNotes": [
        {
            "id": "BB60D46A-6A83-45FF-ACFAFD865D696285",
            "name": "2016 WBR Sauvignon Blanc NSRP Tasting Note",
            "dateCreated": "2017-07-13T23:06:17Z",
            "datePublished": "2017-07-13T18:39:00Z",
            "dateModified": "2018-02-05T19:08:29Z",
            "extension": "PDF",
            "tastingFlavor": null,
            "blend": null,
            "ph": null,
            "residualSugars": null,
            "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/BB60D46A-6A83-45FF-ACFAFD865D696285/webimage-5E087897-DA1E-42FE-AD9C04E6CBC890E5.jpg",
            "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/BB60D46A-6A83-45FF-ACFAFD865D696285/mini-0BF927F1-585E-4822-990826B880397D77.jpg",
            "standardFinalJpeg": null,
            "high": null,
            "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/BB60D46A-6A83-45FF-ACFAFD865D696285/thul-AED1F202-7217-498D-8E27FF077EC9DD02.jpg",
            "webPNG": null,
            "transparentPNG": null
        },
        {
            "id": "39450C12-1710-4378-A61A854D2F8B6B04",
            "name": "2015 WBR Sauvignon Blanc NSRP Tasting Note",
            "dateCreated": "2016-10-24T14:51:14Z",
            "datePublished": "2016-10-21T17:21:00Z",
            "dateModified": "2018-02-05T19:07:57Z",
            "extension": "pdf",
            "tastingFlavor": null,
            "blend": "77% Sauvignon Blanc, 13% French Colombard, 9% Verdelho, 1% Chardonnay ",
            "ph": "3.31",
            "residualSugars": "2.7",
            "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/39450C12-1710-4378-A61A854D2F8B6B04/webimage-4DCC506D-2A05-4D09-A24E5CA167A12490.jpg",
            "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/39450C12-1710-4378-A61A854D2F8B6B04/mini-9AAFC246-31C5-4E8C-8B4CE61B33AD9212.jpg",
            "standardFinalJpeg": null,
            "high": null,
            "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/A00BE735-E84A-43D8-811178338E465C9A/39450C12-1710-4378-A61A854D2F8B6B04/thul-9C1440D1-0DC9-44E8-AF96711CCD163F4E.jpg",
            "webPNG": null,
            "transparentPNG": null
        }
    ]
}
```

This endpoint retrieves an item's available digital assets, including bottle shots and tasting notes.
Both arrays of bottle shots and tasting notes contain objects that have contextual information about the digital asset as well as different sized images of the assets.

### HTTP Request

`https://api.cbrands.com/v3/items/{itemId}/digitalAssets`

### URI Parameters

Parameter | Decription | Type
--------- | ------- | -----------
itemId | The ID of the item to retrieve digital assets for | string

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
apiKey | The API key you received upon registration | string

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
              <option>Product API</option>
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