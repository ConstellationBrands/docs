# <i class="fa fa-picture-o wide-icon" aria-hidden="true"></i>Bottle Shots API

This API returns promotional product images ("bottle shots") based on GTIN or UPC. It includes some identifying information about the product as well as a variety of image formats:

* Mini image (PNG)
* Standard final JPEG (JPG)
* Web image (full-size PNG)

The API can return a specific product or all product images modified since a specific date.

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#requestKeyModal">
  <i class="fa fa-key wide-icon" aria-hidden="true"></i>Request an API Key
</button>

###Attribute Details
The following attributes are returned by the Bottle Shots API:

Attribute Name | Description | Type
--------- | ------- | -----------
id | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
name | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
dateCreated | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
datePublished | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
dateModified | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
extension | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
upc | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
brandFamily | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
varietal | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
vintage | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
itemSize | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
webImage | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
miniImage | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
standardFinalJpeg | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
thul | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string
transparentPNG | Lorem ipsum dolor sit amet, cu eos sumo graecis deserunt | string

## Get All Bottle Shots

> Sample JSON response for /bottleShots:

```json
[
  {
    "brandFamily": "754",
    "dateCreated": "2017-01-05T21:10:18Z",
    "dateModified": "2017-01-06T16:24:26Z",
    "datePublished": "2016-12-16T18:12:09Z",
    "extension": "psd",
    "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
    "itemSize": "219",
    "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
    "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
    "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
    "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
    "upc": "184745000126",
    "varietal": "198",
    "vintage": "2014",
    "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
  }
  {
    "brandFamily": "754",
    "dateCreated": "2017-01-05T21:10:18Z",
    "dateModified": "2017-01-06T16:24:26Z",
    "datePublished": "2016-12-16T18:12:09Z",
    "extension": "psd",
    "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
    "itemSize": "219",
    "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
    "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
    "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
    "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
    "upc": "184745000126",
    "varietal": "198",
    "vintage": "2014",
    "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
  }
]
```

Retrieves all bottle shots that have been modified since the specified date.

### HTTP Request

`GET https://api-workers-internal-dev.cloudhub.io/api/1.0/bottleShots`

### Query Parameters

Parameter | Description | Type
--------- | ------- | -----------
dateModified | Retrieve all bottle shots modified after this time | datetime

## Get a Specific Bottle Shot

> Sample JSON response for /bottleShots/{gtin}:

```json
{
  "brandFamily": "754",
  "dateCreated": "2017-01-05T21:10:18Z",
  "dateModified": "2017-01-06T16:24:26Z",
  "datePublished": "2016-12-16T18:12:09Z",
  "extension": "psd",
  "id": "9135BEC3-CF40-4819-B7C9C16DD7E92BF1",
  "itemSize": "219",
  "miniImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/mini-0AA4663D-852F-4DA2-97877C3DF1AD6BA7.png",
  "name": "2014 CHS Cabernet Sauvignon 750ml Bottle Shot",
  "standardFinalJpeg": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/Standard Final JPG-CHS_Bottle_Shot.jpg",
  "thul": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/thul-7ECA50DA-3BF8-4872-9BC1D6B268CFD9F2.png",
  "upc": "184745000126",
  "varietal": "198",
  "vintage": "2014",
  "webImage": "https://d3cy9zhslanhfa.cloudfront.net/media/final/5be7df2b-2a56-417f-84fe-dec1227f9116/webimage-4D27936B-F803-4DC7-80DB39A24800A652.png"
}
```

This endpoint retrieves a specific bottle shot based on the product's GTIN.

### HTTP Request

`GET GET https://api-workers-internal-dev.cloudhub.io/api/1.0/bottleShots/{gtin}`

### URI Parameters

Parameter | Decription | Type
--------- | ------- | -----------
gtin | The GTIN of the product to retrieve | string