# LegoApi

All URIs are relative to *https://rebrickable.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**legoColorsList**](LegoApi.md#legocolorslist) | **GET** /api/v3/lego/colors/ | Get a list of all Colors. |
| [**legoColorsRead**](LegoApi.md#legocolorsread) | **GET** /api/v3/lego/colors/{id}/ | Get details about a specific Color. |
| [**legoElementsRead**](LegoApi.md#legoelementsread) | **GET** /api/v3/lego/elements/{element_id}/ | Get details about a specific Element ID. |
| [**legoMinifigsList**](LegoApi.md#legominifigslist) | **GET** /api/v3/lego/minifigs/ | Get a list of Minifigs. |
| [**legoMinifigsPartsList**](LegoApi.md#legominifigspartslist) | **GET** /api/v3/lego/minifigs/{set_num}/parts/ | Get a list of all Inventory Parts in this Minifig. |
| [**legoMinifigsRead**](LegoApi.md#legominifigsread) | **GET** /api/v3/lego/minifigs/{set_num}/ | Get details for a specific Minifig. |
| [**legoMinifigsSetsList**](LegoApi.md#legominifigssetslist) | **GET** /api/v3/lego/minifigs/{set_num}/sets/ | Get a list of Sets a Minifig has appeared in. |
| [**legoPartCategoriesList**](LegoApi.md#legopartcategorieslist) | **GET** /api/v3/lego/part_categories/ | Get a list of all Part Categories. |
| [**legoPartCategoriesRead**](LegoApi.md#legopartcategoriesread) | **GET** /api/v3/lego/part_categories/{id}/ | Get details about a specific Part Category. |
| [**legoPartsColorsList**](LegoApi.md#legopartscolorslist) | **GET** /api/v3/lego/parts/{part_num}/colors/ | Get a list of all Colors a Part has appeared in. |
| [**legoPartsColorsRead**](LegoApi.md#legopartscolorsread) | **GET** /api/v3/lego/parts/{part_num}/colors/{color_id}/ | Get details about a specific Part/Color combination. |
| [**legoPartsColorsSetsList**](LegoApi.md#legopartscolorssetslist) | **GET** /api/v3/lego/parts/{part_num}/colors/{color_id}/sets/ | Get a list of all Sets the Part/Color combination has appeard in. |
| [**legoPartsList**](LegoApi.md#legopartslist) | **GET** /api/v3/lego/parts/ | Get a list of Parts. |
| [**legoPartsRead**](LegoApi.md#legopartsread) | **GET** /api/v3/lego/parts/{part_num}/ | Get details about a specific Part. |
| [**legoSetsAlternatesList**](LegoApi.md#legosetsalternateslist) | **GET** /api/v3/lego/sets/{set_num}/alternates/ | Get a list of MOCs which are Alternate Builds of a specific Set - i.e. all parts in the MOC can |
| [**legoSetsList**](LegoApi.md#legosetslist) | **GET** /api/v3/lego/sets/ | Get a list of Sets, optionally filtered by any of the below parameters. |
| [**legoSetsMinifigsList**](LegoApi.md#legosetsminifigslist) | **GET** /api/v3/lego/sets/{set_num}/minifigs/ | Get a list of all Inventory Minifigs in this Set. |
| [**legoSetsPartsList**](LegoApi.md#legosetspartslist) | **GET** /api/v3/lego/sets/{set_num}/parts/ | Get a list of all Inventory Parts in this Set. |
| [**legoSetsRead**](LegoApi.md#legosetsread) | **GET** /api/v3/lego/sets/{set_num}/ | Get details for a specific Set. |
| [**legoSetsSetsList**](LegoApi.md#legosetssetslist) | **GET** /api/v3/lego/sets/{set_num}/sets/ | Get a list of all Inventory Sets in this Set. |
| [**legoThemesList**](LegoApi.md#legothemeslist) | **GET** /api/v3/lego/themes/ | Return all Themes |
| [**legoThemesRead**](LegoApi.md#legothemesread) | **GET** /api/v3/lego/themes/{id}/ | Return details for a specific Theme |



## legoColorsList

> legoColorsList(page, pageSize, ordering)

Get a list of all Colors.

Get a list of all Colors.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoColorsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoColorsListRequest;

  try {
    const data = await api.legoColorsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoColorsRead

> legoColorsRead(id, ordering)

Get details about a specific Color.

Get details about a specific Color.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoColorsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string | A unique value identifying this color.
    id: id_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoColorsReadRequest;

  try {
    const data = await api.legoColorsRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | A unique value identifying this color. | [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoElementsRead

> legoElementsRead(elementId)

Get details about a specific Element ID.

Get details about a specific Element ID.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoElementsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    elementId: elementId_example,
  } satisfies LegoElementsReadRequest;

  try {
    const data = await api.legoElementsRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **elementId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoMinifigsList

> legoMinifigsList(page, pageSize, minParts, maxParts, inSetNum, inThemeId, ordering, search)

Get a list of Minifigs.

Get a list of Minifigs.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoMinifigsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // number (optional)
    minParts: 8.14,
    // number (optional)
    maxParts: 8.14,
    // string (optional)
    inSetNum: inSetNum_example,
    // string (optional)
    inThemeId: inThemeId_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
  } satisfies LegoMinifigsListRequest;

  try {
    const data = await api.legoMinifigsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **minParts** | `number` |  | [Optional] [Defaults to `undefined`] |
| **maxParts** | `number` |  | [Optional] [Defaults to `undefined`] |
| **inSetNum** | `string` |  | [Optional] [Defaults to `undefined`] |
| **inThemeId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | A search term. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoMinifigsPartsList

> legoMinifigsPartsList(setNum, page, pageSize)

Get a list of all Inventory Parts in this Minifig.

Get a list of all Inventory Parts in this Minifig.  Optional parameter inc_part_details&#x3D;1 can be used to return additional part fields, the same as for a single part lookup.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoMinifigsPartsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
  } satisfies LegoMinifigsPartsListRequest;

  try {
    const data = await api.legoMinifigsPartsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoMinifigsRead

> legoMinifigsRead(setNum)

Get details for a specific Minifig.

Get details for a specific Minifig.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoMinifigsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
  } satisfies LegoMinifigsReadRequest;

  try {
    const data = await api.legoMinifigsRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoMinifigsSetsList

> legoMinifigsSetsList(setNum, page, pageSize, ordering)

Get a list of Sets a Minifig has appeared in.

Get a list of Sets a Minifig has appeared in.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoMinifigsSetsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoMinifigsSetsListRequest;

  try {
    const data = await api.legoMinifigsSetsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoPartCategoriesList

> legoPartCategoriesList(page, pageSize, ordering)

Get a list of all Part Categories.

Get a list of all Part Categories.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoPartCategoriesListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoPartCategoriesListRequest;

  try {
    const data = await api.legoPartCategoriesList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoPartCategoriesRead

> legoPartCategoriesRead(id, ordering)

Get details about a specific Part Category.

Get details about a specific Part Category.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoPartCategoriesReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A unique integer value identifying this part category.
    id: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoPartCategoriesReadRequest;

  try {
    const data = await api.legoPartCategoriesRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | A unique integer value identifying this part category. | [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoPartsColorsList

> legoPartsColorsList(partNum, page, pageSize, ordering)

Get a list of all Colors a Part has appeared in.

Get a list of all Colors a Part has appeared in.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoPartsColorsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    partNum: partNum_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoPartsColorsListRequest;

  try {
    const data = await api.legoPartsColorsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **partNum** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoPartsColorsRead

> legoPartsColorsRead(partNum, colorId)

Get details about a specific Part/Color combination.

Get details about a specific Part/Color combination.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoPartsColorsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    partNum: partNum_example,
    // string
    colorId: colorId_example,
  } satisfies LegoPartsColorsReadRequest;

  try {
    const data = await api.legoPartsColorsRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **partNum** | `string` |  | [Defaults to `undefined`] |
| **colorId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoPartsColorsSetsList

> legoPartsColorsSetsList(partNum, colorId, page, pageSize, ordering)

Get a list of all Sets the Part/Color combination has appeard in.

Get a list of all Sets the Part/Color combination has appeard in.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoPartsColorsSetsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    partNum: partNum_example,
    // string
    colorId: colorId_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoPartsColorsSetsListRequest;

  try {
    const data = await api.legoPartsColorsSetsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **partNum** | `string` |  | [Defaults to `undefined`] |
| **colorId** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoPartsList

> legoPartsList(page, pageSize, partNum, partNums, partCatId, colorId, bricklinkId, brickowlId, legoId, ldrawId, ordering, search)

Get a list of Parts.

Get a list of Parts.  Optional parameter inc_part_details&#x3D;1 can be used to return additional fields, the same as for a single part lookup.  The optional part_nums filter parameter should be a comma separated list of part_num without spaces.  Optionally filter by one or more of the below query parameters.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoPartsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string (optional)
    partNum: partNum_example,
    // string (optional)
    partNums: partNums_example,
    // string (optional)
    partCatId: partCatId_example,
    // string (optional)
    colorId: colorId_example,
    // string (optional)
    bricklinkId: bricklinkId_example,
    // string (optional)
    brickowlId: brickowlId_example,
    // string (optional)
    legoId: legoId_example,
    // string (optional)
    ldrawId: ldrawId_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
  } satisfies LegoPartsListRequest;

  try {
    const data = await api.legoPartsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **partNum** | `string` |  | [Optional] [Defaults to `undefined`] |
| **partNums** | `string` |  | [Optional] [Defaults to `undefined`] |
| **partCatId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **colorId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **bricklinkId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **brickowlId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **legoId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ldrawId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | A search term. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoPartsRead

> legoPartsRead(partNum)

Get details about a specific Part.

Get details about a specific Part.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoPartsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    partNum: partNum_example,
  } satisfies LegoPartsReadRequest;

  try {
    const data = await api.legoPartsRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **partNum** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoSetsAlternatesList

> legoSetsAlternatesList(setNum, page, pageSize, ordering)

Get a list of MOCs which are Alternate Builds of a specific Set - i.e. all parts in the MOC can

Get a list of MOCs which are Alternate Builds of a specific Set - i.e. all parts in the MOC can be found in the Set.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoSetsAlternatesListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoSetsAlternatesListRequest;

  try {
    const data = await api.legoSetsAlternatesList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoSetsList

> legoSetsList(page, pageSize, themeId, minYear, maxYear, minParts, maxParts, ordering, search)

Get a list of Sets, optionally filtered by any of the below parameters.

Get a list of Sets, optionally filtered by any of the below parameters.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoSetsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string (optional)
    themeId: themeId_example,
    // number (optional)
    minYear: 8.14,
    // number (optional)
    maxYear: 8.14,
    // number (optional)
    minParts: 8.14,
    // number (optional)
    maxParts: 8.14,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
  } satisfies LegoSetsListRequest;

  try {
    const data = await api.legoSetsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **themeId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **minYear** | `number` |  | [Optional] [Defaults to `undefined`] |
| **maxYear** | `number` |  | [Optional] [Defaults to `undefined`] |
| **minParts** | `number` |  | [Optional] [Defaults to `undefined`] |
| **maxParts** | `number` |  | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | A search term. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoSetsMinifigsList

> legoSetsMinifigsList(setNum, page, pageSize)

Get a list of all Inventory Minifigs in this Set.

Get a list of all Inventory Minifigs in this Set.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoSetsMinifigsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
  } satisfies LegoSetsMinifigsListRequest;

  try {
    const data = await api.legoSetsMinifigsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoSetsPartsList

> legoSetsPartsList(setNum, page, pageSize)

Get a list of all Inventory Parts in this Set.

Get a list of all Inventory Parts in this Set.  Optional parameter inc_part_details&#x3D;1 can be used to return additional part fields, the same as for a single part lookup. Optional parameter inc_minifig_parts&#x3D;1 can be used to include minifig parts in this call. Optional parameter inc_color_details&#x3D;0 can be used to prevent color field expansion and reduce response sizes.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoSetsPartsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
  } satisfies LegoSetsPartsListRequest;

  try {
    const data = await api.legoSetsPartsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoSetsRead

> legoSetsRead(setNum)

Get details for a specific Set.

Get details for a specific Set.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoSetsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
  } satisfies LegoSetsReadRequest;

  try {
    const data = await api.legoSetsRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoSetsSetsList

> legoSetsSetsList(setNum, page, pageSize)

Get a list of all Inventory Sets in this Set.

Get a list of all Inventory Sets in this Set.

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoSetsSetsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // string
    setNum: setNum_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
  } satisfies LegoSetsSetsListRequest;

  try {
    const data = await api.legoSetsSetsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoThemesList

> legoThemesList(page, pageSize, ordering)

Return all Themes

Return all Themes

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoThemesListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoThemesListRequest;

  try {
    const data = await api.legoThemesList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## legoThemesRead

> legoThemesRead(id, ordering)

Return details for a specific Theme

Return details for a specific Theme

### Example

```ts
import {
  Configuration,
  LegoApi,
} from '';
import type { LegoThemesReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LegoApi();

  const body = {
    // number | A unique integer value identifying this theme.
    id: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies LegoThemesReadRequest;

  try {
    const data = await api.legoThemesRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | A unique integer value identifying this theme. | [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

