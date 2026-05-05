import prisma from "../config/prisma.js";

type GlobalCategoryInput = {
  name: string;
  color: string;
  type: 'income' | 'expense';
};

const globalCategories: GlobalCategoryInput[] = [
	// Despesas
	{ name: "Alimentação", color: "#FF5733", type: 'expense' },
	{ name: "Transporte", color: "#33A8FF", type: 'expense' },
	{ name: "Moradia", color: "#33FF57", type: 'expense' },
	{ name: "Saúde", color: "#F033FF", type: 'expense' },
	{ name: "Educação", color: "#FF3366", type: 'expense' },
	{ name: "Lazer", color: "#FFBA33", type: 'expense' },
	{ name: "Compras", color: "#33FFF6", type: 'expense' },
	{ name: "Outros", color: "#B033FF", type: 'expense' },

	// Receitas
	{ name: "Salário", color: "#33FF57", type: 'income' },
	{ name: "Freelance", color: "#33A8FF", type: 'income' },
	{ name: "Investimentos", color: "#FFBA33", type: 'income' },
	{ name: "Outros", color: "#B033FF", type: 'income' },
];

export const initializeGlobalCategories = async (): Promise<any[]> => {
	const createdCategories: any[] = [];

	for (const category of globalCategories) {
		try {
			const existing = await prisma.category.findFirst({
				where: {
					name: category.name,
					type: category.type,
				},
			});

			if (!existing) {
				const newCategory = await prisma.category.create({
					data: category,
				});
				createdCategories.push(newCategory);
			}
		} catch (error) {
			console.error("Error initializing global category:", error);
		}
	}
	return createdCategories;
};
