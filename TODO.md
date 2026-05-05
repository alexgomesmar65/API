# Fix Prisma Import Error in globalCategories.service.ts

## Steps:
- [ ] 1. Edit src/services/globalCategories.service.ts to use correct import: `import type * as Prisma from '@prisma/client';` and update usages to `Prisma.Category` and `Prisma.TransactionType`.
- [ ] 2. Run `npx prisma generate` to ensure client types.
- [ ] 3. Test run `yarn dev` to verify no errors.
- [ ] 4. Mark complete and run server successfully.

- [x] 1. Edit src/services/globalCategories.service.ts to define inline types avoiding Prisma type imports.
