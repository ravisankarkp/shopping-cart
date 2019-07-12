let dbconfig= require('../dbconfig/db-connect')

dbconfig.connect(function (error) {
    if (error){
        console.log('db connected error')
        process.exit(1)
    }
    else {
        console.log('connected successfully')

        dbconfig.get().collection('product').insertMany([
            {
                imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
                title: 'gothic video game',
                description:'awesome game.....',
                price:'20'



            }, {
                imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAXXj5UR4U-rom69DzVy3pTS-fdXLSruYywcyTbrdFF1Gj-74oQ',
                title: 'Fortnite video game',
                description:'awesome game.....',
                price:'20'



            },
            {
                imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_1qDSYMALTi7s-09eBEIweAOIVMhe-8D4pspVVNvdeMmJeJO7A',
                title: 'pubg video game',
                description:'awesome game.....',
                price:'20'



            },
            {
                imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YCw1mFGIjs-4CqLORWDV9SynMxkC6VunbAeMC-mYJ0FI9k9Hvg',
                title: 'pes video game',
                description:'awesome game.....',
                price:'20'



            },
            {
                imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Hgk6QtFTl9LREyQK78trf4w0o3J152Bp3PCBaz5tcMwJb_uJ',
                title: 'Real cricket video game',
                description:'awesome game.....',
                price:'20'



            },
            {
                imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRLEfHMUfsnigvxYF76_lvO28GtYZlGW353c3XAjosuRQgwkC',
                title: 'Clash of clans video game',
                description:'awesome game.....',
                price:'20'



            },
        ])
    }
})



