import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

// example create data
const data = {
    "name": "test",
    "in_box": "RELATION_RECORD_ID",
    "description": "test",
    "search_string": "test",
    "in_categories": [
        "RELATION_RECORD_ID"
    ],
    "belongs_to": [
        "RELATION_RECORD_ID"
    ]
};

const record = await pb.collection('Item').create(data);