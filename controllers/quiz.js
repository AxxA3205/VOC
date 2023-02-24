const { quizzes } = require("../models");
const db = require ("../models");
const Quiz = db.quizzes;

// create: Menambah data
exports.create = async (req, res) => {
    
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: " Quiz created successfully",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

    // read: menampilkan data
    exports.getAll = async (req, res) => {
        try {
            const quizzes = await Quiz.findAll()
            res.json({
                message: " Quiz retrieved successfully",
                data: quizzes,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
                data: null,
            });
        }
    };

    // update: mengubah data
    exports.update = async (req, res) => {
        const id = req.params.id
        try {
            const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
            quiz.update(req.body, {
                where: {id}
            });
            res.json({
                message: " Quiz updated successfully",
                data: quizzes,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message || "Some error occured while retrieving quiz",
                data: null,
            });
        }
    };

    //delete: menghapus data sesuai id
    exports.delete = async (req, res) => {
        const id = req.params.id
        try {
            const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
            quiz.destroy()
            res.json({
                message: ` Data dengan id ${id} berhasil dihapus`,
                data: quizzes,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message || "Some error occured while retrieving quiz",
                data: null,
            });
        }
    };

    //mengambil data sesuai id
    exports.findOne = async (req, res) => {
        const id = req.params.id
        try {
            const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
            res.json({
                message: `Quizzes retrieved successfully with id=${id}.`,
                data: quiz,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message || "Some error occured while retrieving quiz",
                data: null,
            });
        }
    };

    // menampilkan semua data quiz berdasarkan catagory tertentu
    exports.getByCategoryId = async (req, res) => {
        const id = req.params.id
            const quizess = await Quiz.findAll({
                where: {
                    categoryId: id
                }
            });
            res.json({
                message: `Quiz retrivied successfully with categoryId=${id}.`,
                data: quizess,
            });
    };

    // menampilkan semua data quiz berdasarkan level tertentu
    exports.getByLevelId = async (req, res) => {
        const id = req.params.id
            const quizzes = await Quiz.findAll({
                where: {
                    levelId: id
                }
            });
            res.json({
                message: ` Quiz retrieved successfully with levelId=${id}.`,
                data: quizzes,
            });
    };
