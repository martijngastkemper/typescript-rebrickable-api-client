
import {
  BaseAPI,
  Configuration,
  LegoApi,
  SwaggerApi,
  UsersApi,
  type FetchAPI,
  type HTTPHeaders,
  type Middleware,
  type RequestOpts,
} from './generated';
import type {
  Color,
  Element,
  JsonObject,
  ListResult,
  Minifig,
  MinifigInSet,
  Paginated,
  Part,
  PartCategory,
  PartColor,
  Set,
  SetBuild,
  SetInSet,
  SetPart,
  SetPartSummary,
  SetSyncResult,
  Theme,
  UserBadge,
  UserMinifig,
  UserPart,
  UserProfile,
  UserSet,
  UserSetListSet,
  UserToken,
} from './models';
import type {
  LegoColorsListRequest,
  LegoColorsReadRequest,
  LegoMinifigsListRequest,
  LegoMinifigsPartsListRequest,
  LegoMinifigsSetsListRequest,
  LegoPartCategoriesListRequest,
  LegoPartsColorsListRequest,
  LegoPartsColorsSetsListRequest,
  LegoPartsListRequest,
  LegoSetsListRequest,
  LegoSetsMinifigsListRequest,
  LegoSetsPartsListRequest,
  LegoSetsSetsListRequest,
  LegoThemesListRequest,
  UsersAllpartsListRequest,
  UsersBadgesListRequest,
  UsersLostPartsCreateRequest,
  UsersLostPartsListRequest,
  UsersMinifigsListRequest,
  UsersPartlistsCreateRequest,
  UsersPartlistsListRequest,
  UsersPartlistsPartsCreateRequest,
  UsersPartlistsPartsListRequest,
  UsersPartlistsPartsUpdateRequest,
  UsersPartlistsUpdateRequest,
  UsersPartsListRequest,
  UsersSetlistsCreateRequest,
  UsersSetlistsListRequest,
  UsersSetlistsSetsCreateRequest,
  UsersSetlistsSetsListRequest,
  UsersSetlistsSetsUpdateRequest,
  UsersSetlistsUpdateRequest,
  UsersSetsListRequest,
  UsersSetsSyncCreateRequest,
  UsersTokenCreateRequest,
} from './generated/apis';

export * from './generated';
export * from './models';

/**
 * Exposes the generated BaseAPI's protected `request`, so the typed wrapper can
 * read the raw JSON body that the spec leaves untyped (the generated *Raw methods
 * discard it and return `void`).
 */
class RawRequestApi extends BaseAPI {
  constructor(configuration: Configuration) {
    super(configuration);
  }

  async send(opts: RequestOpts): Promise<Response> {
    return this.request(opts);
  }
}

// ---------------------------------------------------------------------------
// Option types: derived from the generated request interfaces so that they stay
// in sync with the OpenAPI spec when the client is regenerated.
// ---------------------------------------------------------------------------

export type ListColorsOptions = Pick<LegoColorsListRequest, 'page' | 'pageSize' | 'ordering'>;
export type ListMinifigsOptions = Pick<
  LegoMinifigsListRequest,
  'page' | 'pageSize' | 'minParts' | 'maxParts' | 'inSetNum' | 'inThemeId' | 'ordering' | 'search'
>;
export type ListMinifigPartsOptions = Pick<LegoMinifigsPartsListRequest, 'page' | 'pageSize'>;
export type ListMinifigSetsOptions = Pick<LegoMinifigsSetsListRequest, 'page' | 'pageSize' | 'ordering'>;
export type ListPartCategoriesOptions = Pick<LegoPartCategoriesListRequest, 'page' | 'pageSize' | 'ordering'>;
export type ListPartColorsOptions = Pick<LegoPartsColorsListRequest, 'page' | 'pageSize' | 'ordering'>;
export type ListPartColorSetsOptions = Pick<LegoPartsColorsSetsListRequest, 'page' | 'pageSize' | 'ordering'>;
export type ListPartsOptions = Pick<
  LegoPartsListRequest,
  | 'page' | 'pageSize' | 'partNum' | 'partNums' | 'partCatId' | 'colorId'
  | 'bricklinkId' | 'brickowlId' | 'legoId' | 'ldrawId' | 'ordering' | 'search'
>;
export type ListSetsOptions = Pick<
  LegoSetsListRequest,
  'page' | 'pageSize' | 'themeId' | 'minYear' | 'maxYear' | 'minParts' | 'maxParts' | 'ordering' | 'search'
>;
export type ListSetMinifigsOptions = Pick<LegoSetsMinifigsListRequest, 'page' | 'pageSize'>;
export type ListSetPartsOptions = Pick<LegoSetsPartsListRequest, 'page' | 'pageSize'>;
export type ListSetSetsOptions = Pick<LegoSetsSetsListRequest, 'page' | 'pageSize'>;
export type ListThemesOptions = Pick<LegoThemesListRequest, 'page' | 'pageSize' | 'ordering'>;

export type ListBadgesOptions = Pick<UsersBadgesListRequest, 'page' | 'pageSize' | 'ordering'>;
export type ListAllPartsOptions = Pick<
  UsersAllpartsListRequest, 'page' | 'pageSize' | 'partNum' | 'partCatId' | 'colorId'
>;
export type ListLostPartsOptions = Pick<UsersLostPartsListRequest, 'page' | 'pageSize' | 'ordering'>;
export type ListUserMinifigsOptions = Pick<
  UsersMinifigsListRequest, 'page' | 'pageSize' | 'figSetNum' | 'ordering' | 'search'
>;
export type ListUserPartsOptions = Pick<
  UsersPartsListRequest, 'page' | 'pageSize' | 'partNum' | 'partCatId' | 'colorId' | 'ordering' | 'search'
>;
export type ListUserSetsOptions = Pick<
  UsersSetsListRequest, 'page' | 'pageSize' | 'setNum' | 'themeId' | 'minYear' | 'maxYear' | 'minParts' | 'maxParts' | 'ordering' | 'search'
>;
export type ListPartListsOptions = Pick<UsersPartlistsListRequest, 'page' | 'pageSize'>;
export type CreatePartListOptions = Pick<UsersPartlistsCreateRequest, 'isBuildable' | 'numParts'>;
export type UpdatePartListOptions = Pick<UsersPartlistsUpdateRequest, 'isBuildable' | 'numParts'>;
export type ListPartListPartsOptions = Pick<UsersPartlistsPartsListRequest, 'page' | 'pageSize' | 'ordering'>;
export type CreatePartListPartOptions = Pick<UsersPartlistsPartsCreateRequest, 'quantity'>;
export type UpdatePartListPartOptions = Pick<UsersPartlistsPartsUpdateRequest, 'quantity'>;
export type ListSetListsOptions = Pick<UsersSetlistsListRequest, 'page' | 'pageSize'>;
export type CreateSetListOptions = Pick<UsersSetlistsCreateRequest, 'isBuildable' | 'numSets'>;
export type UpdateSetListOptions = Pick<UsersSetlistsUpdateRequest, 'isBuildable' | 'numSets'>;
export type ListSetListSetsOptions = Pick<UsersSetlistsSetsListRequest, 'page' | 'pageSize' | 'ordering'>;
export type CreateSetListSetOptions = Pick<UsersSetlistsSetsCreateRequest, 'quantity' | 'includeSpares'>;
export type UpdateSetListSetOptions = Pick<UsersSetlistsSetsUpdateRequest, 'quantity' | 'includeSpares'>;
export type AddUserSetOptions = Pick<UsersSetsSyncCreateRequest, 'quantity' | 'includeSpares'>;

export interface RebrickableClientConfig {
  /** Your Rebrickable API key. Sent as `Authorization: key <apiKey>`. */
  apiKey: string;
  /** Override the base URL. Defaults to https://rebrickable.com */
  basePath?: string;
  /**
   * The Rebrickable `user_token` (from `getUserToken`) used by the `users` methods
   * when no explicit token is passed.
   */
  userToken?: string;
  /**
   * Override the `fetch` implementation. Useful for testing or non-browser
   * environments.
   */
  fetchApi?: FetchAPI;
  /**
   * Retry policy for failed requests (429, 5xx, or network errors).
   * @default { retries: 3, minTimeout: 1000, maxTimeout: 10000 }
   */
  retry?: {
    retries?: number;
    minTimeout?: number;
    maxTimeout?: number;
  };
  /** Extra headers merged into every request (may override `Authorization`). */
  headers?: HTTPHeaders;
  /** Middleware for request/response hooks (see typescript-fetch `Middleware`). */
  middleware?: Middleware[];
}

/**
 * Fully-typed client for the Rebrickable API v3.
 *
 * Typed convenience wrappers call the openapi-generator API classes (accessible
 * directly as `client.lego`, `client.users`, `client.swagger`) underneath.
 */
export class RebrickableClient {
  readonly configuration: Configuration;

  /** Generated LEGO API (public data endpoints). */
  readonly lego: LegoApi;
  /** Generated Users API (authenticated user endpoints). */
  readonly users: UsersApi;
  /** Generated Swagger API (the spec itself). */
  readonly swagger: SwaggerApi;

  private readonly raw: RawRequestApi;
  private userToken?: string;

  private readonly config: RebrickableClientConfig;

  constructor(config: RebrickableClientConfig) {
    this.config = config;
    this.userToken = config.userToken;
    this.configuration = new Configuration({
      basePath: config.basePath,
      fetchApi: config.fetchApi,
      headers: {
        Authorization: `key ${config.apiKey}`,
        ...config.headers,
      },
      middleware: config.middleware,
    });
    this.raw = new RawRequestApi(this.configuration);
    this.lego = new LegoApi(this.configuration);
    this.users = new UsersApi(this.configuration);
    this.swagger = new SwaggerApi(this.configuration);
  }

  /**
   * Attach (or replace) the Rebrickable `user_token` on an existing client, so the
   * `users` methods no longer need an explicit token argument. This is the
   * convenience route after calling `getUserToken`.
   */
  setUserToken(userToken: string): void {
    this.userToken = userToken;
  }

  /** Resolve a `user_token`: explicit argument wins, falls back to `setUserToken`/config. */
  private token(userToken?: string): string {
    const value = userToken ?? this.userToken;
    if (!value) {
      throw new Error(
        'A user_token is required for this method. Set it via client.setUserToken(token) ' +
        'or the `userToken` config option, or pass it as the method argument.',
      );
    }
    return value;
  }

  /**
   * Check if a response or error is retryable.
   * @internal
   */
  private isRetryable(error: unknown): boolean {
    if (error instanceof Error && error.name === 'TypeError') {
      // Network errors (e.g., failed to fetch)
      return true;
    }
    if (error instanceof Error && 'response' in error) {
      const status = (error as { response?: { status?: number } }).response?.status;
      return status === 429 || (status !== undefined && status >= 500 && status < 600);
    }
    return false;
  }

  /**
   * Send a request and parse the JSON response.
   * @internal
   */
  private async json<T>(call: Promise<RequestOpts>): Promise<T> {
    const retryConfig = {
      retries: 3,
      minTimeout: 1000,
      maxTimeout: 10000,
      ...this.config.retry,
    };

    let lastError: unknown;
    for (let attempt = 0; attempt <= retryConfig.retries; attempt++) {
      try {
        const response = await this.raw.send(await call);
        if (!response.ok) {
          let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
          try {
            const errorBody = await response.clone().json();
            if (errorBody && typeof errorBody === 'object' && 'detail' in errorBody) {
              errorMessage += ` - ${(errorBody as { detail?: string }).detail}`;
            }
          } catch {
            // Ignore errors when parsing the response body
          }
          const error = new Error(errorMessage);
          if (!this.isRetryable(error)) {
            throw error;
          }
          lastError = error;
        } else {
          return (await response.json()) as T;
        }
      } catch (error: any) {
        // Improve error message for ResponseError from generated API code
        if (error.name === 'ResponseError' && error.response) {
          const response = error.response;
          let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
          try {
            const errorBody = await response.clone().json();
            if (errorBody && typeof errorBody === 'object' && 'detail' in errorBody) {
              errorMessage += ` - ${errorBody.detail}`;
            }
          } catch {
            // Ignore errors when parsing the response body
          }
          const improvedError = new Error(errorMessage);
          if (!this.isRetryable(improvedError)) {
            throw improvedError;
          }
          lastError = improvedError;
        } else if (!this.isRetryable(error)) {
          throw error;
        } else {
          lastError = error;
        }
      }

      if (attempt < retryConfig.retries) {
        const delay = Math.min(
          retryConfig.minTimeout * Math.pow(2, attempt),
          retryConfig.maxTimeout,
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }

  // -------------------------------------------------------------------------
  // LEGO catalog
  // -------------------------------------------------------------------------

  /** Get a list of all colors. */
  async listColors(options: ListColorsOptions = {}): Promise<Paginated<Color>> {
    return this.json<Paginated<Color>>(this.lego.legoColorsListRequestOpts(options));
  }

  /** Get a single color. */
  async getColor(id: string | number): Promise<Color> {
    const params: Pick<LegoColorsReadRequest, 'id'> = { id: String(id) };
    return this.json<Color>(this.lego.legoColorsReadRequestOpts(params));
  }

  /** Get a single element (a part/color combination). */
  async getElement(elementId: string): Promise<Element> {
    return this.json<Element>(this.lego.legoElementsReadRequestOpts({ elementId }));
  }

  /** Get a list of all minifigs. */
  async listMinifigs(options: ListMinifigsOptions = {}): Promise<Paginated<Minifig>> {
    return this.json<Paginated<Minifig>>(this.lego.legoMinifigsListRequestOpts(options));
  }

  /** Get a single minifig. */
  async getMinifig(setNum: string): Promise<Minifig> {
    return this.json<Minifig>(this.lego.legoMinifigsReadRequestOpts({ setNum }));
  }

  /** Get the parts inventory of a minifig. */
  async listMinifigParts(setNum: string, options: ListMinifigPartsOptions = {}): Promise<Paginated<SetPart>> {
    return this.json<Paginated<SetPart>>(this.lego.legoMinifigsPartsListRequestOpts({ setNum, ...options }));
  }

  /** Get the sets a minifig appears in. */
  async listMinifigSets(setNum: string, options: ListMinifigSetsOptions = {}): Promise<Paginated<SetInSet>> {
    return this.json<Paginated<SetInSet>>(this.lego.legoMinifigsSetsListRequestOpts({ setNum, ...options }));
  }

  /** Get a list of all part categories. */
  async listPartCategories(options: ListPartCategoriesOptions = {}): Promise<Paginated<PartCategory>> {
    return this.json<Paginated<PartCategory>>(this.lego.legoPartCategoriesListRequestOpts(options));
  }

  /** Get a single part category. */
  async getPartCategory(id: number): Promise<PartCategory> {
    return this.json<PartCategory>(this.lego.legoPartCategoriesReadRequestOpts({ id }));
  }

  /** Get a list of all parts. */
  async listParts(options: ListPartsOptions = {}): Promise<Paginated<Part>> {
    return this.json<Paginated<Part>>(this.lego.legoPartsListRequestOpts(options));
  }

  /** Get a single part. */
  async getPart(partNum: string): Promise<Part> {
    return this.json<Part>(this.lego.legoPartsReadRequestOpts({ partNum }));
  }

  /** Get a list of all colors a part was produced in. */
  async listPartColors(partNum: string, options: ListPartColorsOptions = {}): Promise<Paginated<PartColor>> {
    return this.json<Paginated<PartColor>>(this.lego.legoPartsColorsListRequestOpts({ partNum, ...options }));
  }

  /** Get a single part/color combination, including its elements. */
  async getPartColor(partNum: string, colorId: string | number): Promise<PartColor> {
    return this.json<PartColor>(this.lego.legoPartsColorsReadRequestOpts({ partNum, colorId: String(colorId) }));
  }

  /** Get a list of sets a specific part/color combination appears in. */
  async listPartColorSets(
    partNum: string,
    colorId: string | number,
    options: ListPartColorSetsOptions = {},
  ): Promise<Paginated<SetPartSummary>> {
    return this.json<Paginated<SetPartSummary>>(
      this.lego.legoPartsColorsSetsListRequestOpts({ partNum, colorId: String(colorId), ...options }),
    );
  }

  /** Get a list of all sets. */
  async listSets(options: ListSetsOptions = {}): Promise<Paginated<Set>> {
    return this.json<Paginated<Set>>(this.lego.legoSetsListRequestOpts(options));
  }

  /** Get a single set. */
  async getSet(setNum: string): Promise<Set> {
    return this.json<Set>(this.lego.legoSetsReadRequestOpts({ setNum }));
  }

  /** Get the alternate builds of a set. */
  async listSetAlternates(setNum: string, options: ListMinifigSetsOptions = {}): Promise<Paginated<SetInSet>> {
    return this.json<Paginated<SetInSet>>(
      this.lego.legoSetsAlternatesListRequestOpts({ setNum, ...options }),
    );
  }

  /** Get the minifigs in a set. */
  async listSetMinifigs(setNum: string, options: ListSetMinifigsOptions = {}): Promise<Paginated<MinifigInSet>> {
    return this.json<Paginated<MinifigInSet>>(this.lego.legoSetsMinifigsListRequestOpts({ setNum, ...options }));
  }

  /** Get the parts inventory of a set. */
  async listSetParts(setNum: string, options: ListSetPartsOptions = {}): Promise<Paginated<SetPart>> {
    return this.json<Paginated<SetPart>>(this.lego.legoSetsPartsListRequestOpts({ setNum, ...options }));
  }

  /** Get the sets included in a set. */
  async listSetSets(setNum: string, options: ListSetSetsOptions = {}): Promise<Paginated<SetInSet>> {
    return this.json<Paginated<SetInSet>>(this.lego.legoSetsSetsListRequestOpts({ setNum, ...options }));
  }

  /** Get a list of all themes. */
  async listThemes(options: ListThemesOptions = {}): Promise<Paginated<Theme>> {
    return this.json<Paginated<Theme>>(this.lego.legoThemesListRequestOpts(options));
  }

  /** Get a single theme. */
  async getTheme(id: number): Promise<Theme> {
    return this.json<Theme>(this.lego.legoThemesReadRequestOpts({ id }));
  }

  // -------------------------------------------------------------------------
  // User account
  // -------------------------------------------------------------------------

  /** Exchange ReBrickable username + password for a user token. */
  async getUserToken(username: string, password: string): Promise<UserToken> {
    const params: UsersTokenCreateRequest = { username, password };
    return this.json<UserToken>(this.users.usersTokenCreateRequestOpts(params));
  }

  /** Get the profile of the current user. */
  async getProfile(): Promise<UserProfile> {
    return this.json<UserProfile>(this.users.usersProfileReadRequestOpts({ userToken: this.token() }));
  }

  /** Get the badges provided to the current user. */
  async listBadges(options: ListBadgesOptions = {}): Promise<Paginated<UserBadge>> {
    return this.json<Paginated<UserBadge>>(this.users.usersBadgesListRequestOpts(options));
  }

  /** Get a single badge. */
  async getBadge(id: number): Promise<UserBadge> {
    return this.json<UserBadge>(this.users.usersBadgesReadRequestOpts({ id }));
  }

  /** Get all owned parts of a user (across sets and loose parts). */
  async listAllParts(options: ListAllPartsOptions = {}): Promise<Paginated<UserPart>> {
    return this.json<Paginated<UserPart>>(
      this.users.usersAllpartsListRequestOpts({ userToken: this.token(), ...options }),
    );
  }

  /** Get which parts are still missing / already owned to build a set. */
  async getSetBuild(setNum: string): Promise<SetBuild> {
    return this.json<SetBuild>(this.users.usersBuildReadRequestOpts({ userToken: this.token(), setNum }));
  }

  /** Get all loose parts of a user that were marked as lost. */
  async listLostParts(options: ListLostPartsOptions = {}): Promise<Paginated<UserPart>> {
    return this.json<Paginated<UserPart>>(
      this.users.usersLostPartsListRequestOpts({ userToken: this.token(), ...options }),
    );
  }

  /** Mark an owned part (by its inventory part id) as lost. */
  async addLostPart(
    invPartId: number,
    lostQuantity?: number,
  ): Promise<UserPart> {
    const params: UsersLostPartsCreateRequest = { userToken: this.token(), invPartId, lostQuantity };
    return this.json<UserPart>(this.users.usersLostPartsCreateRequestOpts(params));
  }

  /** Remove a lost part. */
  async removeLostPart(id: string | number): Promise<void> {
    await this.users.usersLostPartsDelete({ userToken: this.token(), id: String(id) });
  }

  /** Get all minifigs owned by a user. */
  async listUserMinifigs(options: ListUserMinifigsOptions = {}): Promise<Paginated<UserMinifig>> {
    return this.json<Paginated<UserMinifig>>(
      this.users.usersMinifigsListRequestOpts({ userToken: this.token(), ...options }),
    );
  }

  /** Get all parts owned by a user (loose parts). */
  async listUserParts(options: ListUserPartsOptions = {}): Promise<Paginated<UserPart>> {
    return this.json<Paginated<UserPart>>(
      this.users.usersPartsListRequestOpts({ userToken: this.token(), ...options }),
    );
  }

  /** Get all sets owned by a user. */
  async listUserSets(options: ListUserSetsOptions = {}): Promise<Paginated<UserSetListSet>> {
    return this.json<Paginated<UserSetListSet>>(
      this.users.usersSetsListRequestOpts({ userToken: this.token(), ...options }),
    );
  }

  /** Get a single owned set, including its parts. */
  async getUserSet(setNum: string): Promise<UserSet> {
    return this.json<UserSet>(this.users.usersSetsReadRequestOpts({ userToken: this.token(), setNum }));
  }

  /** Add a set to the user's owned sets. */
  async addUserSet(setNum: string, options: AddUserSetOptions = {}): Promise<UserSet> {
    return this.json<UserSet>(
      this.users.usersSetsCreateRequestOpts({ userToken: this.token(), setNum, ...options }),
    );
  }

  /** Remove a set from the user's owned sets. */
  async removeUserSet(setNum: string): Promise<void> {
    await this.users.usersSetsDelete({ userToken: this.token(), setNum });
  }

  /** Update the quantity of an owned set and optionally include spare parts. */
  async updateUserSet(
    setNum: string,
    options: AddUserSetOptions = {},
  ): Promise<UserSet> {
    return this.json<UserSet>(
      this.users.usersSetsUpdateRequestOpts({ userToken: this.token(), setNum, ...options }),
    );
  }

  /** Replace the contents of a user's owned sets with the given list. */
  async syncUserSets(setNum: string, options: AddUserSetOptions = {}): Promise<SetSyncResult> {
    const params: UsersSetsSyncCreateRequest = { userToken: this.token(), setNum, ...options };
    return this.json<SetSyncResult>(this.users.usersSetsSyncCreateRequestOpts(params));
  }

  /** Get all part lists of a user. */
  async listPartLists(options: ListPartListsOptions = {}): Promise<Paginated<ListResult>> {
    return this.json<Paginated<ListResult>>(
      this.users.usersPartlistsListRequestOpts({ userToken: this.token(), ...options }),
    );
  }

  /** Create a part list. */
  async createPartList(name: string, options: CreatePartListOptions = {}): Promise<ListResult> {
    const params: UsersPartlistsCreateRequest = { userToken: this.token(), name, ...options };
    return this.json<ListResult>(this.users.usersPartlistsCreateRequestOpts(params));
  }

  /** Get a single part list. */
  async getPartList(listId: string | number): Promise<ListResult> {
    return this.json<ListResult>(this.users.usersPartlistsReadRequestOpts({ userToken: this.token(), listId: String(listId) }));
  }

  /** Update a part list. */
  async updatePartList(
    listId: string | number,
    name: string,
    options: UpdatePartListOptions = {},
  ): Promise<ListResult> {
    const params: UsersPartlistsUpdateRequest = {
      userToken: this.token(),
      listId: String(listId),
      name,
      isBuildable: options.isBuildable,
      numParts: options.numParts,
    };
    return this.json<ListResult>(this.users.usersPartlistsUpdateRequestOpts(params));
  }

  /** Delete a part list. */
  async removePartList(listId: string | number): Promise<void> {
    await this.users.usersPartlistsDelete({ userToken: this.token(), listId: String(listId) });
  }

  /** Get all parts in a part list. */
  async listPartListParts(
    listId: string | number,
    options: ListPartListPartsOptions = {},
  ): Promise<Paginated<UserPart>> {
    return this.json<Paginated<UserPart>>(
      this.users.usersPartlistsPartsListRequestOpts({ userToken: this.token(), listId: String(listId), ...options }),
    );
  }

  /** Get a single part/color entry in a part list. */
  async getPartListPart(
    listId: string | number,
    partNum: string,
    colorId: string | number,
  ): Promise<UserPart> {
    return this.json<UserPart>(
      this.users.usersPartlistsPartsReadRequestOpts({
        userToken: this.token(),
        listId: String(listId),
        partNum,
        colorId: String(colorId),
      }),
    );
  }

  /** Add a part/color with a quantity to a part list. */
  async addPartListPart(
    listId: string | number,
    partNum: string,
    colorId: string | number,
    quantity = 1,
  ): Promise<UserPart> {
    const params: UsersPartlistsPartsCreateRequest = {
      userToken: this.token(),
      listId: String(listId),
      partNum,
      colorId: Number(colorId),
      quantity,
    };
    return this.json<UserPart>(this.users.usersPartlistsPartsCreateRequestOpts(params));
  }

  /** Update the quantity of a part in a part list. */
  async updatePartListPart(
    listId: string | number,
    partNum: string,
    colorId: string | number,
    options: UpdatePartListPartOptions,
  ): Promise<UserPart> {
    return this.json<UserPart>(
      this.users.usersPartlistsPartsUpdateRequestOpts({
        userToken: this.token(),
        listId: String(listId),
        partNum,
        colorId: String(colorId),
        ...options,
      }),
    );
  }

  /** Remove a part from a part list. */
  async removePartListPart(
    listId: string | number,
    partNum: string,
    colorId: string | number,
  ): Promise<void> {
    await this.users.usersPartlistsPartsDelete({
      userToken: this.token(),
      listId: String(listId),
      partNum,
      colorId: String(colorId),
    });
  }

  /** Get all set lists of a user. */
  async listSetLists(options: ListSetListsOptions = {}): Promise<Paginated<ListResult>> {
    return this.json<Paginated<ListResult>>(
      this.users.usersSetlistsListRequestOpts({ userToken: this.token(), ...options }),
    );
  }

  /** Create a set list. */
  async createSetList(name: string, options: CreateSetListOptions = {}): Promise<ListResult> {
    const params: UsersSetlistsCreateRequest = { userToken: this.token(), name, ...options };
    return this.json<ListResult>(this.users.usersSetlistsCreateRequestOpts(params));
  }

  /** Get a single set list. */
  async getSetList(listId: string | number): Promise<ListResult> {
    return this.json<ListResult>(this.users.usersSetlistsReadRequestOpts({ userToken: this.token(), listId: String(listId) }));
  }

  /** Update a set list. */
  async updateSetList(
    listId: string | number,
    name: string,
    options: UpdateSetListOptions = {},
  ): Promise<ListResult> {
    const params: UsersSetlistsUpdateRequest = {
      userToken: this.token(),
      listId: String(listId),
      name,
      isBuildable: options.isBuildable,
      numSets: options.numSets,
    };
    return this.json<ListResult>(this.users.usersSetlistsUpdateRequestOpts(params));
  }

  /** Delete a set list. */
  async removeSetList(listId: string | number): Promise<void> {
    await this.users.usersSetlistsDelete({ userToken: this.token(), listId: String(listId) });
  }

  /** Get all sets in a set list. */
  async listSetListSets(
    listId: string | number,
    options: ListSetListSetsOptions = {},
  ): Promise<Paginated<UserSet>> {
    return this.json<Paginated<UserSet>>(
      this.users.usersSetlistsSetsListRequestOpts({ userToken: this.token(), listId: String(listId), ...options }),
    );
  }

  /** Add a set to a set list. */
  async addSetListSet(
    listId: string | number,
    setNum: string,
    options: CreateSetListSetOptions = {},
  ): Promise<UserSet> {
    const params: UsersSetlistsSetsCreateRequest = {
      userToken: this.token(),
      listId: String(listId),
      setNum,
      ...options,
    };
    return this.json<UserSet>(this.users.usersSetlistsSetsCreateRequestOpts(params));
  }

  /** Update the quantity (and spare parts) of a set in a set list. */
  async updateSetListSet(
    listId: string | number,
    setNum: string,
    options: UpdateSetListSetOptions = {},
  ): Promise<UserSet> {
    return this.json<UserSet>(
      this.users.usersSetlistsSetsUpdateRequestOpts({
        userToken: this.token(),
        listId: String(listId),
        setNum,
        ...options,
      }),
    );
  }

  /** Remove a set from a set list. */
  async removeSetListSet(listId: string | number, setNum: string): Promise<void> {
    await this.users.usersSetlistsSetsDelete({
      userToken: this.token(),
      listId: String(listId),
      setNum,
    });
  }

  /** Get the raw OpenAPI document served by Rebrickable. */
  async getSwagger(): Promise<JsonObject> {
    return this.json<JsonObject>(this.swagger.swaggerListRequestOpts());
  }
}