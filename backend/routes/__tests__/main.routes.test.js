const supertest = require ('supertest')
const app = require ('../../server')
const Contact = require('../../models/contactModel')

describe("dado que chamo a rota" , () => {
    const mockContact = {
        "nome":"Roberta",
        "telefone":8133457818,
        "celular":8198747410,
        "email":"email@beta.com",
        "endereco": "Rua das Palmas"
    }
    const findSpy = jest.spyOn(Contact, 'find').mockResolvedValue([mockContact])
    const findByIdSpy = jest.spyOn(Contact, 'findById').mockResolvedValue(mockContact)
    const findByIdAndDeleteSpy = jest.spyOn(Contact, 'findByIdAndDelete').mockResolvedValue()
    const findByIdAndUpdateSpy = jest.spyOn(Contact, 'findByIdAndUpdate').mockResolvedValue(mockContact)
    const saveSpy = jest.spyOn(Contact.prototype, 'save').mockResolvedValue(mockContact)

    test ("'GET / ' , deve retornar todos os contacts" , async () => {
        const result = await supertest (app).get('/')
        expect(result.status).toEqual(200)
        expect(result.body.contact).toEqual([mockContact])
        expect(findSpy).toHaveBeenCalledWith({})
    })
    test ("'GET /1234', deve retornar o contact de id 1234" , async () => {
        const result = await supertest (app).get('/1234')
        expect(result.status).toEqual(200)
        expect(result.body.contact).toEqual(mockContact)
        expect(findByIdSpy).toHaveBeenCalledWith('1234')
    })
    test ("'DELETE /1234', deve excluir o contact de id 1234" , async () => {
        const result = await supertest (app).delete('/1234')
        expect(result.status).toEqual(200)
        expect(result.body.error).toEqual(false)
        expect(findByIdAndDeleteSpy).toHaveBeenCalledWith('1234')

    })
    test ("'PUT /1234' , deve atualizar o contact de id 1234" , async () => {
        const result = await supertest (app).put('/1234').send(mockContact)
        expect(result.status).toEqual(200)
        expect(result.body.contact).toEqual(mockContact)
        expect(findByIdAndUpdateSpy).toHaveBeenCalledWith('1234' , mockContact)
    })
    test ("'POST /' , deve criar um novo contact" , async () =>{
        const result = await supertest (app).post('/').send(mockContact)
        expect(result.status).toEqual(200)
        expect(result.body.contact).toEqual(mockContact)
        expect(saveSpy).toHaveBeenCalledWith()
    }) 
})