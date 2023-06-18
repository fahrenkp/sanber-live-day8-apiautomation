const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

async function getUserPage(page){
    const response = await request.get(`/users?page=${page}`);  //url yang ditambahkkan variable dari web yang dituju , bisa juga digunakan untuk auth
    return response
}

describe("GET data user dari web reqres", function(){  //test scenario
    it("return user page 1", async function(){  // test case 1
        const query1 = "1" //page ke-... yang dituju
        const response = await getUserPage(query1)  //memanggil URL dari variabel getUserPage 
        //console.log(await response.body)

        expect(await response.status).to.eql(200);  //pengecekan bahwa code yg muncul adalah 200 / berhasil
        expect(await response.body.data.length).to.eql(6); // pengecekan bahwa ada 6 aray yang tampil di web
    })
    it("return user page 2", async function(){  // test case 2
        const query1 = "2" //page ke-... yang dituju
        const response = await getUserPage(query1)  //memanggil URL dari variabel getUserPage 
        //console.log(await response.body)

        expect(await response.status).to.eql(200);   //pengecekan bahwa code yg muncul adalah 200 / berhasil
        expect(await response.body.data.length).to.eql(6); //pengecekan bahwa ada 6 aray yang tampil  
    })
}) 