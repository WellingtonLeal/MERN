import supertest from "supertest"
import mockingoose from "mockingoose"
import {UsuarioModel} from "../model/usuario"
import app from "../server"

test("[GET] /usuarios", async() =>  {
    const mockusuarios = [{
        _id: "5e235583709d6943fdf4e717",
        username:"wellington",
        password: "lemos"
    }];

    mockingoose(UsuarioModel)
    .toReturn(mockusuarios, "find");
    const response = await supertest(app).get("/usuarios");
    expect (response.text).toBe(JSON.stringify(mockusuarios))

});