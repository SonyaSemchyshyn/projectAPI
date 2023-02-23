import { expect } from 'chai';
import fetch from 'node-fetch';

    describe('#indexOf()', function () {
        it('should upload file',  async function () {
let resJSON;
            let res = await fetch( 'https://content.dropboxapi.com/2/files/upload', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer sl.BYx-N_kItbYZTduoQP18XWMmfqK7Y4iIhjkMtg8d2f5HOhRZ9YWBwGgdytsuWE7P7miGWJMNTPEhCTiIeXjRBG9sDKnJ691pX4LcvudcU5KLnPRZiu80bsl-blLomipYMItVwmc2',
                    "Dropbox-API-Arg": JSON.stringify({"path": "/Users/sonyasemchyshyn/Desktop/projectAPI/APi.jpg"}),
                    "Content-Type": 'application/octet-stream'
                }
            })
// все в 1 записати
    resJSON = await res.json();
            expect(res.status).to.equal(200);
            console.log(resJSON['id']);

        });
    });
