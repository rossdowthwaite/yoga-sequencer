FROM mongo

COPY /mongo-seed/seed-dataset.json /init.json

CMD mongoimport --host mongo --db yoga-sequence-service --collection sequences --drop --type json --file /init.json --jsonArray
