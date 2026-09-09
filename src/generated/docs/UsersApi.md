# UsersApi

All URIs are relative to *https://rebrickable.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersAllpartsList**](UsersApi.md#usersallpartslist) | **GET** /api/v3/users/{user_token}/allparts/ | Get a list of all the Parts in all the user\&#39;s Part Lists as well as the Parts inside Sets in the user\&#39;s Set Lists. |
| [**usersBadgesList**](UsersApi.md#usersbadgeslist) | **GET** /api/v3/users/badges/ | Get a list of all the available Badges |
| [**usersBadgesRead**](UsersApi.md#usersbadgesread) | **GET** /api/v3/users/badges/{id}/ | Get details about a specific Badge |
| [**usersBuildRead**](UsersApi.md#usersbuildread) | **GET** /api/v3/users/{user_token}/build/{set_num}/ | Find out how many parts the user needs to build the specified Set. |
| [**usersLostPartsCreate**](UsersApi.md#userslostpartscreate) | **POST** /api/v3/users/{user_token}/lost_parts/ | Add one or more Lost Parts to the user. |
| [**usersLostPartsDelete**](UsersApi.md#userslostpartsdelete) | **DELETE** /api/v3/users/{user_token}/lost_parts/{id}/ | Remove the Lost Part from the user. |
| [**usersLostPartsList**](UsersApi.md#userslostpartslist) | **GET** /api/v3/users/{user_token}/lost_parts/ | Get a list of all the Lost Parts from the user\&#39;s LEGO collection. |
| [**usersMinifigsList**](UsersApi.md#usersminifigslist) | **GET** /api/v3/users/{user_token}/minifigs/ | Get a list of all the Minifigs in all the user\&#39;s Sets. Note that this is a read-only list as Minifigs are |
| [**usersPartlistsCreate**](UsersApi.md#userspartlistscreate) | **POST** /api/v3/users/{user_token}/partlists/ | Add a new Part List. |
| [**usersPartlistsDelete**](UsersApi.md#userspartlistsdelete) | **DELETE** /api/v3/users/{user_token}/partlists/{list_id}/ | Delete a Part List and all it\&#39;s Parts. |
| [**usersPartlistsList**](UsersApi.md#userspartlistslist) | **GET** /api/v3/users/{user_token}/partlists/ | Get a list of all the user\&#39;s Part Lists. |
| [**usersPartlistsPartialUpdate**](UsersApi.md#userspartlistspartialupdate) | **PATCH** /api/v3/users/{user_token}/partlists/{list_id}/ | Update an existing Part List\&#39;s details. |
| [**usersPartlistsPartsCreate**](UsersApi.md#userspartlistspartscreate) | **POST** /api/v3/users/{user_token}/partlists/{list_id}/parts/ | Add one or more Parts to the Part List. |
| [**usersPartlistsPartsDelete**](UsersApi.md#userspartlistspartsdelete) | **DELETE** /api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/ | Delete a Part from the Part List. |
| [**usersPartlistsPartsList**](UsersApi.md#userspartlistspartslist) | **GET** /api/v3/users/{user_token}/partlists/{list_id}/parts/ | Get a list of all the Parts in a specific Part List. |
| [**usersPartlistsPartsRead**](UsersApi.md#userspartlistspartsread) | **GET** /api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/ | Get details about a specific Part in the Part List. |
| [**usersPartlistsPartsUpdate**](UsersApi.md#userspartlistspartsupdate) | **PUT** /api/v3/users/{user_token}/partlists/{list_id}/parts/{part_num}/{color_id}/ | Replace an existing Part\&#39;s details in the Part List. |
| [**usersPartlistsRead**](UsersApi.md#userspartlistsread) | **GET** /api/v3/users/{user_token}/partlists/{list_id}/ | Get details about a specific Part List. |
| [**usersPartlistsUpdate**](UsersApi.md#userspartlistsupdate) | **PUT** /api/v3/users/{user_token}/partlists/{list_id}/ | Replace an existing Part List\&#39;s details. |
| [**usersPartsList**](UsersApi.md#userspartslist) | **GET** /api/v3/users/{user_token}/parts/ | Get a list of all the Parts in all the user\&#39;s Part Lists. |
| [**usersProfileRead**](UsersApi.md#usersprofileread) | **GET** /api/v3/users/{user_token}/profile/ | Get details about a specific user. |
| [**usersSetlistsCreate**](UsersApi.md#userssetlistscreate) | **POST** /api/v3/users/{user_token}/setlists/ | Add a new Set List. |
| [**usersSetlistsDelete**](UsersApi.md#userssetlistsdelete) | **DELETE** /api/v3/users/{user_token}/setlists/{list_id}/ | Delete a Set List and all it\&#39;s Sets. |
| [**usersSetlistsList**](UsersApi.md#userssetlistslist) | **GET** /api/v3/users/{user_token}/setlists/ | Get a list of all the user\&#39;s Set Lists. |
| [**usersSetlistsPartialUpdate**](UsersApi.md#userssetlistspartialupdate) | **PATCH** /api/v3/users/{user_token}/setlists/{list_id}/ | Update an existing Set List\&#39;s details. |
| [**usersSetlistsRead**](UsersApi.md#userssetlistsread) | **GET** /api/v3/users/{user_token}/setlists/{list_id}/ | Get details about a specific Set List. |
| [**usersSetlistsSetsCreate**](UsersApi.md#userssetlistssetscreate) | **POST** /api/v3/users/{user_token}/setlists/{list_id}/sets/ | Add one or more Sets to the Set List. Existing Sets are unaffected. |
| [**usersSetlistsSetsDelete**](UsersApi.md#userssetlistssetsdelete) | **DELETE** /api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/ | Delete a Set from the Set List. |
| [**usersSetlistsSetsList**](UsersApi.md#userssetlistssetslist) | **GET** /api/v3/users/{user_token}/setlists/{list_id}/sets/ | Get a list of all the Sets in a specific Set List. |
| [**usersSetlistsSetsPartialUpdate**](UsersApi.md#userssetlistssetspartialupdate) | **PATCH** /api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/ | Update an existing Set\&#39;s details in the Set List. |
| [**usersSetlistsSetsRead**](UsersApi.md#userssetlistssetsread) | **GET** /api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/ | Get details about a specific Set in the Set List. |
| [**usersSetlistsSetsUpdate**](UsersApi.md#userssetlistssetsupdate) | **PUT** /api/v3/users/{user_token}/setlists/{list_id}/sets/{set_num}/ | Replace an existing Set\&#39;s details in the Set List. |
| [**usersSetlistsUpdate**](UsersApi.md#userssetlistsupdate) | **PUT** /api/v3/users/{user_token}/setlists/{list_id}/ | Replace an existing Set List\&#39;s details. |
| [**usersSetsCreate**](UsersApi.md#userssetscreate) | **POST** /api/v3/users/{user_token}/sets/ | Add one or more Sets to the user\&#39;s LEGO collection. Existing Sets are unaffected. |
| [**usersSetsDelete**](UsersApi.md#userssetsdelete) | **DELETE** /api/v3/users/{user_token}/sets/{set_num}/ | Delete the Set from all the user\&#39;s Set Lists. |
| [**usersSetsList**](UsersApi.md#userssetslist) | **GET** /api/v3/users/{user_token}/sets/ | Get a list of all the Sets in the user\&#39;s LEGO collection. |
| [**usersSetsRead**](UsersApi.md#userssetsread) | **GET** /api/v3/users/{user_token}/sets/{set_num}/ | Get details about a specific Set in the user\&#39;s LEGO collection. |
| [**usersSetsSyncCreate**](UsersApi.md#userssetssynccreate) | **POST** /api/v3/users/{user_token}/sets/sync/ | Synchronise a user\&#39;s Sets to the POSTed list. |
| [**usersSetsUpdate**](UsersApi.md#userssetsupdate) | **PUT** /api/v3/users/{user_token}/sets/{set_num}/ | Update an existing Set\&#39;s quantity in all Set Lists. This PUT call is different to others in that it will create |
| [**usersTokenCreate**](UsersApi.md#userstokencreate) | **POST** /api/v3/users/_token/ | Generate a User Token to be used for authorising user account actions in subsequent calls. Username can be either |



## usersAllpartsList

> usersAllpartsList(userToken, page, pageSize, partNum, partCatId, colorId)

Get a list of all the Parts in all the user\&#39;s Part Lists as well as the Parts inside Sets in the user\&#39;s Set Lists.

Get a list of all the Parts in all the user\&#39;s Part Lists as well as the Parts inside Sets in the user\&#39;s Set Lists.  ###WARNING this call is very resource intensive, do not overuse it!  Optionally, filter by one or more of the below query parameters.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersAllpartsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string (optional)
    partNum: partNum_example,
    // number (optional)
    partCatId: 8.14,
    // number (optional)
    colorId: 8.14,
  } satisfies UsersAllpartsListRequest;

  try {
    const data = await api.usersAllpartsList(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **partNum** | `string` |  | [Optional] [Defaults to `undefined`] |
| **partCatId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **colorId** | `number` |  | [Optional] [Defaults to `undefined`] |

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


## usersBadgesList

> usersBadgesList(page, pageSize, ordering)

Get a list of all the available Badges

Get a list of all the available Badges

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersBadgesListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersBadgesListRequest;

  try {
    const data = await api.usersBadgesList(body);
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


## usersBadgesRead

> usersBadgesRead(id, ordering)

Get details about a specific Badge

Get details about a specific Badge

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersBadgesReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // number | A unique integer value identifying this badge.
    id: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersBadgesReadRequest;

  try {
    const data = await api.usersBadgesRead(body);
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
| **id** | `number` | A unique integer value identifying this badge. | [Defaults to `undefined`] |
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


## usersBuildRead

> usersBuildRead(setNum, userToken)

Find out how many parts the user needs to build the specified Set.

Find out how many parts the user needs to build the specified Set.  The user\&#39;s default Build Settings will be used to calculate a Build Match % using their LEGO Collection of Sets and Parts.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersBuildReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
  } satisfies UsersBuildReadRequest;

  try {
    const data = await api.usersBuildRead(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |

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


## usersLostPartsCreate

> usersLostPartsCreate(userToken, invPartId, lostQuantity)

Add one or more Lost Parts to the user.

Add one or more Lost Parts to the user.  ### Single Part When adding a single Part, returns the successfully created Part (status 201) or details for why the Part could not be added. ### Multiple Parts To add multiple Parts, POST a JSON list of them (using a Content-Type header of \&#39;application/json\&#39;). The inv_part_id field can be retrieved from the Set\&#39;s inventory. e.g: &#x60;[{\&quot;inv_part_id\&quot;: 806698, \&quot;lost_quantity\&quot;: 3},   {\&quot;inv_part_id\&quot;: 256007, \&quot;lost_quantity\&quot;: 2}]&#x60; Returns a list of successfully added Parts. If the Part already exists or is unrecognised, it will be skipped.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersLostPartsCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | 
    invPartId: 56,
    // number |  (optional)
    lostQuantity: 56,
  } satisfies UsersLostPartsCreateRequest;

  try {
    const data = await api.usersLostPartsCreate(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **invPartId** | `number` |  | [Defaults to `undefined`] |
| **lostQuantity** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersLostPartsDelete

> usersLostPartsDelete(id, userToken, ordering)

Remove the Lost Part from the user.

Remove the Lost Part from the user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersLostPartsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    id: id_example,
    // string
    userToken: userToken_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersLostPartsDeleteRequest;

  try {
    const data = await api.usersLostPartsDelete(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersLostPartsList

> usersLostPartsList(userToken, page, pageSize, ordering)

Get a list of all the Lost Parts from the user\&#39;s LEGO collection.

Get a list of all the Lost Parts from the user\&#39;s LEGO collection.  Optionally, filter by one or more of the below query parameters.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersLostPartsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersLostPartsListRequest;

  try {
    const data = await api.usersLostPartsList(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
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


## usersMinifigsList

> usersMinifigsList(userToken, page, pageSize, figSetNum, ordering, search)

Get a list of all the Minifigs in all the user\&#39;s Sets. Note that this is a read-only list as Minifigs are

Get a list of all the Minifigs in all the user\&#39;s Sets. Note that this is a read-only list as Minifigs are automatically determined by the Sets in the user\&#39;s Set Lists.  Minifigs that were manually added to Set Lists can be retrieved via the GET /api/v3/users/{user_token}/sets/ endpoint.  Optionally, filter by one or more of the below query parameters.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersMinifigsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string (optional)
    figSetNum: figSetNum_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
  } satisfies UsersMinifigsListRequest;

  try {
    const data = await api.usersMinifigsList(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **figSetNum** | `string` |  | [Optional] [Defaults to `undefined`] |
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


## usersPartlistsCreate

> usersPartlistsCreate(userToken, name, isBuildable, numParts)

Add a new Part List.

Add a new Part List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // string | 
    name: name_example,
    // boolean |  (optional)
    isBuildable: true,
    // number |  (optional)
    numParts: 56,
  } satisfies UsersPartlistsCreateRequest;

  try {
    const data = await api.usersPartlistsCreate(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **name** | `string` |  | [Defaults to `undefined`] |
| **isBuildable** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **numParts** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPartlistsDelete

> usersPartlistsDelete(listId, userToken)

Delete a Part List and all it\&#39;s Parts.

Delete a Part List and all it\&#39;s Parts.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
  } satisfies UsersPartlistsDeleteRequest;

  try {
    const data = await api.usersPartlistsDelete(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |

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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPartlistsList

> usersPartlistsList(userToken, page, pageSize)

Get a list of all the user\&#39;s Part Lists.

Get a list of all the user\&#39;s Part Lists.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
  } satisfies UsersPartlistsListRequest;

  try {
    const data = await api.usersPartlistsList(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
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


## usersPartlistsPartialUpdate

> usersPartlistsPartialUpdate(listId, userToken, isBuildable, name, numParts)

Update an existing Part List\&#39;s details.

Update an existing Part List\&#39;s details.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsPartialUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // boolean |  (optional)
    isBuildable: true,
    // string |  (optional)
    name: name_example,
    // number |  (optional)
    numParts: 56,
  } satisfies UsersPartlistsPartialUpdateRequest;

  try {
    const data = await api.usersPartlistsPartialUpdate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **isBuildable** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **numParts** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPartlistsPartsCreate

> usersPartlistsPartsCreate(listId, userToken, partNum, quantity, colorId)

Add one or more Parts to the Part List.

Add one or more Parts to the Part List.  ### Single Part When adding a single Part, returns the successfully created Part (status 201) or details for why the Part could not be added. ### Multiple Parts To add multiple Parts, POST a JSON list of them (using a Content-Type header of \&#39;application/json\&#39;). e.g: &#x60;[{\&quot;part_num\&quot;:\&quot;3001\&quot;, \&quot;color_id\&quot;: 1, \&quot;quantity\&quot;: 10},  {\&quot;part_num\&quot;:\&quot;3001\&quot;, \&quot;color_id\&quot;: 2, \&quot;quantity\&quot;: 20},  {\&quot;part_num\&quot;:\&quot;3002\&quot;, \&quot;color_id\&quot;: 14, \&quot;quantity\&quot;: 30}]&#x60; Returns a list of successfully added Parts. If the Part already exists or is unrecognised, it will be skipped.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsPartsCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // string | 
    partNum: partNum_example,
    // number | 
    quantity: 56,
    // number | 
    colorId: 56,
  } satisfies UsersPartlistsPartsCreateRequest;

  try {
    const data = await api.usersPartlistsPartsCreate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **partNum** | `string` |  | [Defaults to `undefined`] |
| **quantity** | `number` |  | [Defaults to `undefined`] |
| **colorId** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPartlistsPartsDelete

> usersPartlistsPartsDelete(partNum, listId, colorId, userToken, ordering)

Delete a Part from the Part List.

Delete a Part from the Part List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsPartsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    partNum: partNum_example,
    // string
    listId: listId_example,
    // string
    colorId: colorId_example,
    // string
    userToken: userToken_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersPartlistsPartsDeleteRequest;

  try {
    const data = await api.usersPartlistsPartsDelete(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **colorId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPartlistsPartsList

> usersPartlistsPartsList(listId, userToken, page, pageSize, ordering)

Get a list of all the Parts in a specific Part List.

Get a list of all the Parts in a specific Part List.  Optional parameter inc_part_details&#x3D;1 can be used to return additional part fields, the same as for a single part lookup. Optional parameter inc_color_details&#x3D;0 can be used to prevent color field expansion and reduce response sizes.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsPartsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersPartlistsPartsListRequest;

  try {
    const data = await api.usersPartlistsPartsList(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
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


## usersPartlistsPartsRead

> usersPartlistsPartsRead(partNum, listId, colorId, userToken, ordering)

Get details about a specific Part in the Part List.

Get details about a specific Part in the Part List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsPartsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    partNum: partNum_example,
    // string
    listId: listId_example,
    // string
    colorId: colorId_example,
    // string
    userToken: userToken_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersPartlistsPartsReadRequest;

  try {
    const data = await api.usersPartlistsPartsRead(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **colorId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
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


## usersPartlistsPartsUpdate

> usersPartlistsPartsUpdate(partNum, listId, colorId, userToken, quantity, ordering)

Replace an existing Part\&#39;s details in the Part List.

Replace an existing Part\&#39;s details in the Part List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsPartsUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    partNum: partNum_example,
    // string
    listId: listId_example,
    // string
    colorId: colorId_example,
    // string
    userToken: userToken_example,
    // number | 
    quantity: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersPartlistsPartsUpdateRequest;

  try {
    const data = await api.usersPartlistsPartsUpdate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **colorId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **quantity** | `number` |  | [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPartlistsRead

> usersPartlistsRead(listId, userToken)

Get details about a specific Part List.

Get details about a specific Part List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
  } satisfies UsersPartlistsReadRequest;

  try {
    const data = await api.usersPartlistsRead(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |

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


## usersPartlistsUpdate

> usersPartlistsUpdate(listId, userToken, name, isBuildable, numParts)

Replace an existing Part List\&#39;s details.

Replace an existing Part List\&#39;s details.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartlistsUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // string | 
    name: name_example,
    // boolean |  (optional)
    isBuildable: true,
    // number |  (optional)
    numParts: 56,
  } satisfies UsersPartlistsUpdateRequest;

  try {
    const data = await api.usersPartlistsUpdate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **name** | `string` |  | [Defaults to `undefined`] |
| **isBuildable** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **numParts** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPartsList

> usersPartsList(userToken, page, pageSize, partNum, partCatId, colorId, ordering, search)

Get a list of all the Parts in all the user\&#39;s Part Lists.

Get a list of all the Parts in all the user\&#39;s Part Lists.  Optional parameter inc_part_details&#x3D;1 can be used to return additional part fields, the same as for a single part lookup.  ###Set List logic Parts appearing in multiple Part Lists will be listed multiple times.  Optionally, filter by one or more of the below query parameters.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPartsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string (optional)
    partNum: partNum_example,
    // number (optional)
    partCatId: 8.14,
    // number (optional)
    colorId: 8.14,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
  } satisfies UsersPartsListRequest;

  try {
    const data = await api.usersPartsList(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **partNum** | `string` |  | [Optional] [Defaults to `undefined`] |
| **partCatId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **colorId** | `number` |  | [Optional] [Defaults to `undefined`] |
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


## usersProfileRead

> usersProfileRead(userToken)

Get details about a specific user.

Get details about a specific user.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersProfileReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
  } satisfies UsersProfileReadRequest;

  try {
    const data = await api.usersProfileRead(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |

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


## usersSetlistsCreate

> usersSetlistsCreate(userToken, name, isBuildable, numSets)

Add a new Set List.

Add a new Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // string | 
    name: name_example,
    // boolean |  (optional)
    isBuildable: true,
    // number |  (optional)
    numSets: 56,
  } satisfies UsersSetlistsCreateRequest;

  try {
    const data = await api.usersSetlistsCreate(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **name** | `string` |  | [Defaults to `undefined`] |
| **isBuildable** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **numSets** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetlistsDelete

> usersSetlistsDelete(listId, userToken)

Delete a Set List and all it\&#39;s Sets.

Delete a Set List and all it\&#39;s Sets.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
  } satisfies UsersSetlistsDeleteRequest;

  try {
    const data = await api.usersSetlistsDelete(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |

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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetlistsList

> usersSetlistsList(userToken, page, pageSize)

Get a list of all the user\&#39;s Set Lists.

Get a list of all the user\&#39;s Set Lists.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
  } satisfies UsersSetlistsListRequest;

  try {
    const data = await api.usersSetlistsList(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
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


## usersSetlistsPartialUpdate

> usersSetlistsPartialUpdate(listId, userToken, isBuildable, name, numSets)

Update an existing Set List\&#39;s details.

Update an existing Set List\&#39;s details.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsPartialUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // boolean |  (optional)
    isBuildable: true,
    // string |  (optional)
    name: name_example,
    // number |  (optional)
    numSets: 56,
  } satisfies UsersSetlistsPartialUpdateRequest;

  try {
    const data = await api.usersSetlistsPartialUpdate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **isBuildable** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **numSets** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetlistsRead

> usersSetlistsRead(listId, userToken)

Get details about a specific Set List.

Get details about a specific Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
  } satisfies UsersSetlistsReadRequest;

  try {
    const data = await api.usersSetlistsRead(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |

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


## usersSetlistsSetsCreate

> usersSetlistsSetsCreate(listId, userToken, setNum, quantity, includeSpares)

Add one or more Sets to the Set List. Existing Sets are unaffected.

Add one or more Sets to the Set List. Existing Sets are unaffected.  ### Single Set When adding a single Set, returns the successfully created Set (status 201) or details for why the Set could not be added. ### Multiple Sets To add multiple Sets, POST a JSON list of them (using a Content-Type header of \&#39;application/json\&#39;). e.g: &#x60;[{\&quot;set_num\&quot;:\&quot;8043-1\&quot;, \&quot;quantity\&quot;: 1},  {\&quot;set_num\&quot;:\&quot;8110-1\&quot;, \&quot;quantity\&quot;: 2, \&quot;include_spares\&quot;: \&quot;False\&quot;}]&#x60; Returns a list of successfully added Sets. If the Set already exists or is unrecognised, it will be skipped.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsSetsCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // string | 
    setNum: setNum_example,
    // number |  (optional)
    quantity: 56,
    // boolean |  (optional)
    includeSpares: true,
  } satisfies UsersSetlistsSetsCreateRequest;

  try {
    const data = await api.usersSetlistsSetsCreate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **quantity** | `number` |  | [Optional] [Defaults to `undefined`] |
| **includeSpares** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetlistsSetsDelete

> usersSetlistsSetsDelete(listId, setNum, userToken, ordering)

Delete a Set from the Set List.

Delete a Set from the Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsSetsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersSetlistsSetsDeleteRequest;

  try {
    const data = await api.usersSetlistsSetsDelete(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetlistsSetsList

> usersSetlistsSetsList(listId, userToken, page, pageSize, ordering)

Get a list of all the Sets in a specific Set List.

Get a list of all the Sets in a specific Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsSetsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersSetlistsSetsListRequest;

  try {
    const data = await api.usersSetlistsSetsList(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
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


## usersSetlistsSetsPartialUpdate

> usersSetlistsSetsPartialUpdate(listId, setNum, userToken, ordering, quantity, includeSpares)

Update an existing Set\&#39;s details in the Set List.

Update an existing Set\&#39;s details in the Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsSetsPartialUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // number |  (optional)
    quantity: 56,
    // boolean |  (optional)
    includeSpares: true,
  } satisfies UsersSetlistsSetsPartialUpdateRequest;

  try {
    const data = await api.usersSetlistsSetsPartialUpdate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **quantity** | `number` |  | [Optional] [Defaults to `undefined`] |
| **includeSpares** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetlistsSetsRead

> usersSetlistsSetsRead(listId, setNum, userToken, ordering)

Get details about a specific Set in the Set List.

Get details about a specific Set in the Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsSetsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
  } satisfies UsersSetlistsSetsReadRequest;

  try {
    const data = await api.usersSetlistsSetsRead(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
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


## usersSetlistsSetsUpdate

> usersSetlistsSetsUpdate(listId, setNum, userToken, ordering, quantity, includeSpares)

Replace an existing Set\&#39;s details in the Set List.

Replace an existing Set\&#39;s details in the Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsSetsUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // number |  (optional)
    quantity: 56,
    // boolean |  (optional)
    includeSpares: true,
  } satisfies UsersSetlistsSetsUpdateRequest;

  try {
    const data = await api.usersSetlistsSetsUpdate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **quantity** | `number` |  | [Optional] [Defaults to `undefined`] |
| **includeSpares** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetlistsUpdate

> usersSetlistsUpdate(listId, userToken, name, isBuildable, numSets)

Replace an existing Set List\&#39;s details.

Replace an existing Set List\&#39;s details.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetlistsUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    listId: listId_example,
    // string
    userToken: userToken_example,
    // string | 
    name: name_example,
    // boolean |  (optional)
    isBuildable: true,
    // number |  (optional)
    numSets: 56,
  } satisfies UsersSetlistsUpdateRequest;

  try {
    const data = await api.usersSetlistsUpdate(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **name** | `string` |  | [Defaults to `undefined`] |
| **isBuildable** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **numSets** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetsCreate

> usersSetsCreate(userToken, setNum, quantity, includeSpares)

Add one or more Sets to the user\&#39;s LEGO collection. Existing Sets are unaffected.

Add one or more Sets to the user\&#39;s LEGO collection. Existing Sets are unaffected.  ### Set List logic The Set List used when adding sets is chosen in the following order: 1. If no Set Lists exist, one will be created and used 2. User\&#39;s configured default Set List for Imports 3. The first Set List alphabetically  ### Single Set When adding a single Set, returns the successfully created Set (status 201) or details for why the Set could not be added. ### Multiple Sets To add multiple Sets, POST a JSON list of them (using a Content-Type header of \&#39;application/json\&#39;). e.g: &#x60;[{\&quot;set_num\&quot;:\&quot;8043-1\&quot;, \&quot;quantity\&quot;: 1},  {\&quot;set_num\&quot;:\&quot;8110-1\&quot;, \&quot;quantity\&quot;: 2, \&quot;include_spares\&quot;: \&quot;False\&quot;}]&#x60; Returns a list of successfully added Sets. If the Set already exists or is unrecognised, it will be skipped.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetsCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // string | 
    setNum: setNum_example,
    // number |  (optional)
    quantity: 56,
    // boolean |  (optional)
    includeSpares: true,
  } satisfies UsersSetsCreateRequest;

  try {
    const data = await api.usersSetsCreate(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **quantity** | `number` |  | [Optional] [Defaults to `undefined`] |
| **includeSpares** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetsDelete

> usersSetsDelete(setNum, userToken, setNum2, themeId, minYear, maxYear, minParts, maxParts, ordering, search)

Delete the Set from all the user\&#39;s Set Lists.

Delete the Set from all the user\&#39;s Set Lists.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
    // string (optional)
    setNum2: setNum_example,
    // number (optional)
    themeId: 8.14,
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
  } satisfies UsersSetsDeleteRequest;

  try {
    const data = await api.usersSetsDelete(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **setNum2** | `string` |  | [Optional] [Defaults to `undefined`] |
| **themeId** | `number` |  | [Optional] [Defaults to `undefined`] |
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
| **204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetsList

> usersSetsList(userToken, page, pageSize, setNum, themeId, minYear, maxYear, minParts, maxParts, ordering, search)

Get a list of all the Sets in the user\&#39;s LEGO collection.

Get a list of all the Sets in the user\&#39;s LEGO collection.  ### Set List logic Sets appearing in multiple Set Lists will be listed multiple times.  Optionally, filter by one or more of the below query parameters.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetsListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    pageSize: 56,
    // string (optional)
    setNum: setNum_example,
    // number (optional)
    themeId: 8.14,
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
  } satisfies UsersSetsListRequest;

  try {
    const data = await api.usersSetsList(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |
| **setNum** | `string` |  | [Optional] [Defaults to `undefined`] |
| **themeId** | `number` |  | [Optional] [Defaults to `undefined`] |
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


## usersSetsRead

> usersSetsRead(setNum, userToken, setNum2, themeId, minYear, maxYear, minParts, maxParts, ordering, search)

Get details about a specific Set in the user\&#39;s LEGO collection.

Get details about a specific Set in the user\&#39;s LEGO collection.  ### Set List logic Because this merges sets found across all Set Lists the fields list_id and include_spares may not be accurate unless the Set actually only exists in a single Set List.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetsReadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
    // string (optional)
    setNum2: setNum_example,
    // number (optional)
    themeId: 8.14,
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
  } satisfies UsersSetsReadRequest;

  try {
    const data = await api.usersSetsRead(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **setNum2** | `string` |  | [Optional] [Defaults to `undefined`] |
| **themeId** | `number` |  | [Optional] [Defaults to `undefined`] |
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


## usersSetsSyncCreate

> usersSetsSyncCreate(userToken, setNum, quantity, includeSpares)

Synchronise a user\&#39;s Sets to the POSTed list.

Synchronise a user\&#39;s Sets to the POSTed list.  ### Set List logic This is used to completely replace the user\&#39;s Sets with those in the supplied list. It will remove any Sets in Rebrickable that are not found in the supplied list. It will attempt to keep any current Rebrickable Sets in their existing Set Lists, and will add any new Sets found into the Default Set List for Imports in the user\&#39;s settings. ### Single Set When adding a single Set, returns the successfully created Set (status 201) or details for why the Set could not be added. ### Multiple Sets To add multiple Sets, POST a JSON list of them (using a Content-Type header of \&#39;application/json\&#39;). e.g: &#x60;[{\&quot;set_num\&quot;:\&quot;8043-1\&quot;, \&quot;quantity\&quot;: 1},  {\&quot;set_num\&quot;:\&quot;8110-1\&quot;, \&quot;quantity\&quot;: 2, \&quot;include_spares\&quot;: \&quot;False\&quot;}]&#x60; Returns a list of successfully added Sets. If the Set is unrecognised, it will be skipped.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetsSyncCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    userToken: userToken_example,
    // string | 
    setNum: setNum_example,
    // number |  (optional)
    quantity: 56,
    // boolean |  (optional)
    includeSpares: true,
  } satisfies UsersSetsSyncCreateRequest;

  try {
    const data = await api.usersSetsSyncCreate(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **setNum** | `string` |  | [Defaults to `undefined`] |
| **quantity** | `number` |  | [Optional] [Defaults to `undefined`] |
| **includeSpares** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersSetsUpdate

> usersSetsUpdate(setNum, userToken, setNum2, themeId, minYear, maxYear, minParts, maxParts, ordering, search, quantity)

Update an existing Set\&#39;s quantity in all Set Lists. This PUT call is different to others in that it will create

Update an existing Set\&#39;s quantity in all Set Lists. This PUT call is different to others in that it will create the Set if it doesn\&#39;t already exist, and it will delete the Set if you pass a quantity of 0.  ### Set List logic * Default Set List &#x3D; user\&#39;s configured default import list or the first alphabetically if none exist. * Increasing quantity &#x3D; add to Set in default Set List if it exists, else add it there * Decreasing quantity &#x3D; remove from Set in default Set List first, then from remaining lists until done

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersSetsUpdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string
    setNum: setNum_example,
    // string
    userToken: userToken_example,
    // string (optional)
    setNum2: setNum_example,
    // number (optional)
    themeId: 8.14,
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
    // number |  (optional)
    quantity: 56,
  } satisfies UsersSetsUpdateRequest;

  try {
    const data = await api.usersSetsUpdate(body);
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
| **userToken** | `string` |  | [Defaults to `undefined`] |
| **setNum2** | `string` |  | [Optional] [Defaults to `undefined`] |
| **themeId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **minYear** | `number` |  | [Optional] [Defaults to `undefined`] |
| **maxYear** | `number` |  | [Optional] [Defaults to `undefined`] |
| **minParts** | `number` |  | [Optional] [Defaults to `undefined`] |
| **maxParts** | `number` |  | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | A search term. | [Optional] [Defaults to `undefined`] |
| **quantity** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersTokenCreate

> usersTokenCreate(username, password)

Generate a User Token to be used for authorising user account actions in subsequent calls. Username can be either

Generate a User Token to be used for authorising user account actions in subsequent calls. Username can be either  the actual username or the user\&#39;s email address.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersTokenCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // string | Username (or email) of user
    username: username_example,
    // string | Password of user
    password: password_example,
  } satisfies UsersTokenCreateRequest;

  try {
    const data = await api.usersTokenCreate(body);
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
| **username** | `string` | Username (or email) of user | [Defaults to `undefined`] |
| **password** | `string` | Password of user | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

