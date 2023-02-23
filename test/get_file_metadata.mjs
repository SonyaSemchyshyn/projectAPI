import { expect } from 'chai';
import fetch from 'node-fetch';
const tokenScoredApp = 'Bearer sl.BY1sH9lvg7r02Y2m31G7FaSIgGkKYk56Q9by8_5DI1qpg_VoDpE4cznh4ftBfXSh7f-Wi6xOSOzbFg2xm26vwq5c8StS45Ld_6vuef6e9YU-BJxZN8fv3XkBNVy5hloIlYamxOtW';

describe('get_file_metadata',  async function () {
    it('should get file meta data',  async function () {

        let res = await fetch('https://api.dropboxapi.com/2/sharing/get_file_metadata', {
            method: 'POST',
            headers: {
                Authorization: tokenScoredApp,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({"file": "id:a9mdXjJNZEcAAAAAAAAAEQ"})
        })

        expect(res.status).to.equal(200);

    });
});
