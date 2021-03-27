const Yup = require('yup');
const Item = require('../Models/Item');

class ItemController {

    async index(req, res) {
        const {
            page = 1,
            limit = 5
        } = req.query;

        await Item.paginate(
            {}, 
            { select: 'name active', page, limit })
        .then((itens) => {
            return res.json({
                error: false,
                itens
            }); 
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        });
    };

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            active: Yup.string()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: true,
                message: "Erro: Dados inválidos!"
            });
        };

        var dados = req.body;

        const item = await Item.create(dados, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Erro: Item não foi cadastrado!"
            });

            return res.status(200).json({
                error: false,
                message: "Item cadastrado com sucesso!",
                dados: item
            })
        });
    };

    async update(req, res) {
        var dados = req.body;

        await Item.updateOne({ _id: req.params.id }, dados, (err) => {
            if(err) 
            return res.status(400).json({
                error: true,
                message: "Erro: Item não foi editado com sucesso!"
            });

            return res.json({
                error: false,
                message: "Item editado com sucesso!"
            });
        });        
    };

    async delete(req, res) {

        await Item.deleteOne({ _id: req.params.id }, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Erro: Item não foi apagado com sucesso!"
            });
        });

        return res.json({
            error: false,
            message: "Item apagado com sucesso!"
        });
    };
}

module.exports = new ItemController();