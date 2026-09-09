# SwaggerApi

All URIs are relative to *https://rebrickable.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**swaggerList**](SwaggerApi.md#swaggerlist) | **GET** /api/v3/swagger/ |  |



## swaggerList

> swaggerList()



### Example

```ts
import {
  Configuration,
  SwaggerApi,
} from '';
import type { SwaggerListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SwaggerApi();

  try {
    const data = await api.swaggerList();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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

