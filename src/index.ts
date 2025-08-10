#!/usr/bin/env node
import { McpServer } from "@effect/ai"
import { NodeRuntime, NodeSink, NodeStream } from "@effect/platform-node"
import { Layer, Logger } from "effect"
import { ReferenceDocsTools } from "./ReferenceDocs.js"
import { Readmes } from "./Readmes.js"

McpServer.layerHttp({
  name: "effect-mcp",
  version: "0.1.0",
  path: "/mcp"
}).pipe(
  Layer.provide([ReferenceDocsTools, Readmes]),
  Layer.provide(Logger.add(Logger.prettyLogger({ stderr: true }))),
  Layer.launch,
  NodeRuntime.runMain,
)
