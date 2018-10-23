## A collection of Boilerplates for Node.js intended for RESTful APIs

This repo consists of multiple Node.js boilerplates to suite different project
purposes.

### Use Cases
1. ***Threaded Base:***
  * Utilize in cases where utilization of multiple CPU cores is desired (E.G. Multi-core VMs)
  * Individual process forked per available CPU core
  * Requires no extra work
  * Should scale round robin across cores
  * Not necessary in cases where only a single CPU core is required or available
2. ***Singleton Bases:***
  * Standard single thread bases for fastify and express.js

#### Fastify vs Express
Fastify vs Express Benchmarks:
* https://www.fastify.io/benchmarks/
* https://www.nearform.com/blog/reaching-ludicrous-speed-with-fastify/

Benefits of Fastify:
* Schema validation built in
* Fast JSON parsing

#### Each boilerplate includes:
1. Folder structure and primary file templates
2. Dotenv setup and configuration
3. Basic configuration for Unit/API testing
4. Ready to build Dockerfile on node:alpine (~68MB)

#### API/Server boilerplates include (in addition to above):
1. 404 handling
2. Routing configuration

#### Multi worker boilerplates include (in addition to all above):
1. Process forking number of workers = number of CPU cores
2. Test configuration for forked servers

#### Fastify Documentation
* https://www.fastify.io/docs/latest/
#### Express Documentation
* https://expressjs.com/en/4x/api.html

### Folder Structure
1. rest-api-singleton: Single threaded starter templates including testing setup
  * ***node-express-base***: Single-threaded express-based
  * ***node-fastify-base***: Single-threaded fastify-based
2. rest-api-threaded: Multi worker starter templates including testing setup
  * ***node-express-cluster-base***: Multi-threaded express-based
  * ***node-fastify-cluster-base***: Multi-threaded fastify-based
3. ***node-base***: Basic node.js app with folder structure (env, dockerfile, test)

#### A note about fastify
Fastify is relatively new, vs Express which has been around since 2010

#### A note about environment variables
When running locally these projects expect the environment variable "NODE_ENV" to be set to 'development'
In ~/.bashrc or ~/.bash_aliases add the following line:

    export NODE_ENV='development'
