import { expect } from 'chai';
import fetch from 'node-fetch';

const baseURL = 'https://content.dropboxapi.com/2';
const tokenScoredApp = 'Bearer sl.BY6oay7NugVwmz8AfpNKllgPOn7Kts2vjSP1ECrmSkM_xi1pbd1Yw1DgwTtCtK4cwP6LtGsY_vWWgUTyDmis6Q6uPDsSHG_wtOTZqaan64zlsHlmcTDwRHZkzbzinz2QlkLDhfny';
const tokenAppFolder = 'Bearer sl.BY7SvHpumoq8Yf9b8AkY0tw9nfM5QAehPxn3CN1WfbsSUnuLkM2T93-PK-tPyEKU6pxPHH7z2KDhSbDJenlSySWcwckZEwQGTeMzfQWxF-QwzJN7VN6Ng4itw1d07DpwSGzMH6zI';
const contentType = "application/json";

describe('', async () => {
    let id: any;

    it('Should upload file', async () => {
        const res = await fetch(`${baseURL}/files/upload`, {
            method: 'POST',
            headers: {
                Authorization: tokenAppFolder,
                "Dropbox-API-Arg": JSON.stringify({ "path": "/Users/sonyasemchyshyn/Desktop/projectAPI/APi.jpg" }),
                "Content-Type": 'application/octet-stream'
            }
        });

        const resJSON = await res.json();

        id = resJSON['id'];

        expect(resJSON['name']).to.equal('APi.jpg');
        expect(res.status).to.equal(200);
    });

    it('Should get file meta data', async () => {
        console.log(id);
        const res2 = await fetch('https://api.dropboxapi.com/2/sharing/get_file_metadata', {
            method: 'POST',
            headers: {
                Authorization: tokenScoredApp,
                "Content-Type": contentType
            },
            body: JSON.stringify({ 'file': id })
        });

        const resJ = await res2.json();

        console.log(id);
        expect(res2.status).to.equal(200);

        expect(resJ['id']).to.equal(id);
    });

    it('Should delete file', async () => {
        const res = await fetch('https://api.dropboxapi.com/2/files/delete_v2', {
            method: 'POST',
            headers: {
                Authorization: tokenAppFolder,
                "Content-Type": contentType,
            },
            body: JSON.stringify({ "path": "/users/sonyasemchyshyn/desktop/projectapi/api.jpg" })
        });

        const resJ = await res.json();
        expect(res.status).to.equal(200);
        // @ts-ignore
        expect(resJ['metadata']['id']).to.equal(id);
    });
});
