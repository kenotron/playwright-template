# minimal playwright template

This repo uses the following:

- pnpm
- Playwright
- Prisma
- ts-node
- swc

## Playwright details

Github actions are configured with the postgres database as a container service exposed to the port 5432. Playwright is configured to run inside the Github runners with a minimized parallelization since those free runners are quite low in core count.

The example here uses the Playwright concept of fixtures to setup and tear down the db. An improvement is work on making this to allow a different schema per test or per Playwright worker.

Playwright allows certain test "projects" to depend on each other. Auth here in this example depends on the database.

## Prisma

Note there is a difference between seeding normally vs in a test. Something more sophisticated can be made here so seeding can even be per test / suite.