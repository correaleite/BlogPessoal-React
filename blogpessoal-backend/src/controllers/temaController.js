import {PrismaClient} from "@prisma/client/extension";

const prisma = new PrismaClient();

//Lista todos os temas cadastros
export const getAllTemas = async (req, res) => {
    try {
        const temas = await prisma.temas.findMany({
            include: {postagens: true} //Traz também as postagens associadas a ela
        });
        return res.status(200).json(temas);
    }catch(error){
        return res.status(500).json({error: 'Erro ao buscar temas.'});
    }
};

// 'temas' pode estar errado