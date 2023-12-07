import {
  CosmosDatasourceKind,
  CosmosHandlerKind,
  CosmosProject,
} from "@subql/types-cosmos";

// Can expand the Datasource processor types via the genreic param
const project: CosmosProject = {
  specVersion: "1.0.0",
  version: "0.0.1",
  name: "osmosis-starter",
  description:
    "This project can be use as a starting point for developing your Cosmos osmosis based SubQuery project",
  runner: {
    node: {
      name: "@subql/node-cosmos",
      version: ">=3.0.0",
    },
    query: {
      name: "@subql/query",
      version: "*",
    },
  },
  schema: {
    file: "./schema.graphql",
  },
  network: {
    /* The genesis hash of the network (hash of block 0) */
    chainId: "osmosis-1",
    /**
     * These endpoint(s) should be non-pruned archive nodes
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     * We suggest providing an array of endpoints for increased speed and reliability
     */
    endpoint: ["https://rpc.osmosis.zone:443"],
    chaintypes: new Map([
      [
        "osmosis.gamm.v1beta1",
        {
          file: "./proto/osmosis/gamm/v1beta1/tx.proto",
          messages: [
            "MsgSwapExactAmountIn",
            "MsgSwapExactAmountOut",
            "MsgJoinSwapShareAmountOut",
          ],
        },
      ],
      [
        " osmosis.poolmanager.v1beta1",
        {
          file: "./proto/osmosis/poolmanager/v1beta1/swap_route.proto",
          messages: ["SwapAmountOutRoute", "SwapAmountInRoute"],
        },
      ],
      [
        "cosmos.base.v1beta1",
        {
          file: "./proto/cosmos/base/v1beta1/coin.proto",
          messages: ["Coin"],
        },
      ],
    ]),
  },
  dataSources: [
    {
      kind: CosmosDatasourceKind.Runtime,
      startBlock: 12670353,
      mapping: {
        file: "./dist/index.js",
        handlers: [
          {
            handler: "handleMsgSwapExactAmountIn",
            kind: CosmosHandlerKind.Message,
            filter: {
              type: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
            },
          },
          {
            handler: "handleMsgSwapExactAmountOut",
            kind: CosmosHandlerKind.Message,
            filter: {
              type: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
            },
          },
          {
            handler: "handleMsgJoinSwapShareAmountOut",
            kind: CosmosHandlerKind.Message,
            filter: {
              type: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
            },
          },
        ],
      },
    },
  ],
};

// Must set default to the project instance
export default project;
