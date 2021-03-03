db.ventasolivos.insertMany([

    {
        "codcli": '28ZX',  
        "cliente": "Olivarera San Isidro Castro del Río S.A.", 
        "tipocliente":"Habitual",
        "fechaven": new Date("2020-10-25"),
        "detalle": [
            {"codoliv": 011, "cantidad": 1000}, 
            {"codoliv": 014, "cantidad": 3000}, 
            {"codoliv": 013, "cantidad": 5000}
        ]
    },

    {   "codcli": '20BZ',  
        "cliente": "Viveros Francisco Jose Algaba S.L.", 
        "tipocliente":"No Habitual",
        "fechaven": new Date("2020-12-01"),
        "detalle": [
            {"codoliv": 016, "cantidad": 20000}, 
            {"codoliv": 011, "cantidad": 10000}, 
            
        ]
    },
    {   "codcli": '29GH',  
        "cliente": "Francisco José Zamorano Cubilla", 
        "tipocliente":"Habitual",
        "fechaven": new Date("2020-09-20"),
        "detalle": [
            {"codoliv": 015, "cantidad": 1000}, 
            {"codoliv": 017, "cantidad": 3000}, 
            {"codoliv": 012, "cantidad": 5000}
        ]
    },
    {   "codcli": '26PI',  
        "cliente": "Cooperativa Castreña Virgen de la Salud", 
        "tipocliente":"Habitual",
        "fechaven": new Date("2020-02-12"),
        "detalle": [
            {"codoliv": 011, "cantidad": 30000}, 
            {"codoliv": 017, "cantidad": 40000}, 
            {"codoliv": 016, "cantidad": 17000}
        ]
    },
    {   "codcli": '29GH',  
        "cliente": "Mercadona S.L.", 
        "tipocliente":"No Habitual",
        "fechaven": new Date("2020-10-20"),
        "detalle": [
            {"codoliv": 014, "cantidad": 18000}, 
            {"codoliv": 012, "cantidad": 20000}, 
            
        ]
    },
    {   "codcli": '30KL',  
        "cliente": "Vivers Miquel Aixalà S.L.", 
        "tipocliente":"Habitual",
        "fechaven": new Date("2020-03-27"),
        "detalle": [
            {"codoliv": 015, "cantidad": 1500}, 
            {"codoliv": 017, "cantidad": 40000}, 
            {"codoliv": 012, "cantidad": 20000}
        ]
    },
    {   "codcli": '35HB',  
        "cliente": "Olivarera Hinojosa del Duque S.L.", 
        "tipocliente":"No Habitual",
        "fechaven": new Date("2020-02-18"),
        "detalle": [
            {"codoliv": 017, "cantidad": 9000}, 
            {"codoliv": 015, "cantidad": 40000}, 
            {"codoliv": 011, "cantidad": 8000}
        ]
    },
    {   "codcli": '45HJ',  
        "cliente": "Cooperativa Andaluza Jiennense S.A.", 
        "tipocliente":"No Habitual",
        "fechaven": new Date("2020-07-21"),
        "detalle": [
            {"codoliv": 014, "cantidad": 10000}, 
            {"codoliv": 016, "cantidad": 30000}, 
            {"codoliv": 011, "cantidad": 50000}
        ]
    },
    {   "codcli": '19VI',  
        "cliente": "Carrefour S.A.", 
        "tipocliente":"No Habitual",
        "fechaven": new Date("2020-11-10"),
        "detalle": [
            {"codoliv": 015, "cantidad": 9000}, 
            {"codoliv": 017, "cantidad": 10000}, 
            {"codoliv": 012, "cantidad": 55100}
    ]
},
{   "codcli": '29GH',  
    "cliente": "Jose Javier Vazquez Lopera", 
    "tipocliente":"No Habitual",
    "fechaven": new Date("2020-11-11"),
    "detalle": [
        {"codoliv": 017, "cantidad": 9000}, 
        {"codoliv": 016, "cantidad": 500}, 
        {"codoliv": 015, "cantidad": 100}
]
},

{   "codcli": '50IL',  
    "cliente": "Cooperativa Granadina Minguito S.L.", 
    "tipocliente":"Habitual",
    "fechaven": new Date("2020-01-11"),
    "detalle": [
        {"codoliv": 011, "cantidad": 9000}, 
        {"codoliv": 014, "cantidad": 3500}, 
        {"codoliv": 017, "cantidad": 5900}
]
},
{   "codcli": '13RM',  
    "cliente": "ACS S.A", 
    "tipocliente":"Habitual",
    "fechaven": new Date("2020-05-29"),
    "detalle": [
        {"codoliv": 017, "cantidad": 1000000}, 
        {"codoliv": 016, "cantidad": 400000}, 
        
]
},

{   "codcli": '27HL',  
    "cliente": "Francisco José Aguilera Castro", 
    "tipocliente":"No Habitual",
    "fechaven": new Date("2020-02-21"),
    "detalle": [
        {"codoliv": 012, "cantidad": 400}, 
        {"codoliv": 014, "cantidad": 300},
        {"codoliv": 016, "cantidad": 500}
        ]
    },
    {   "codcli": '60JK',  
        "cliente": "Cooperativa Sevillana S.L.", 
        "tipocliente":"No Habitual",
        "fechaven": new Date("2020-09-20"),
        "detalle": [
            {"codoliv": 015, "cantidad": 1000}, 
            {"codoliv": 017, "cantidad": 3000}
            
        ]
    }
]);

db.catolivos.insertMany([

    {   "codoliv": 011,
        "nomoliv": "Picual",
        "categoria": "Especial",
        "precio": 1.40
    },

    {   "codoliv": 012,
        "nomoliv": "Hojiblanca",
        "categoria": "Común",
        "precio": 0.80
    },
    {   "codoliv": 013,
        "nomoliv": "Picudo",
        "categoria": "Común",
        "precio": 0.90
    },
    {   "codoliv": 014,
        "nomoliv": "Ocal",
        "categoria": "Especial",
        "precio": 1.60
    },
    {   "codoliv": 015,
        "nomoliv": "Cornicabra",
        "categoria": "Especial",
        "precio": 1.70
    },
    {   "codoliv": 016,
        "nomoliv": "Cornezuelo",
        "categoria": "Especial",
        "precio": 1.30
    },
    {   "codoliv": 017,
        "nomoliv": "Changlot Real",
        "categoria": "Común",
        "precio": 1.00
    },
    
]);
//Aggregate para unir las dos colecciones que tienen en común el Código del Olivo, en el cuál se detallan las compras realizadas por los clientes
db.ventasolivos.aggregate(
    [
        {
            $lookup: {
                from: "catolivos",
                localField: "detalle.codoliv",
                foreignField: "codoliv",
                as: "inforolivos"
            }
        }
    ]
).pretty()

//Aggregate al contrario del anterior, 
//nos devuelven los clientes que han comprado una variedad de olivos en concreto
db.catolivos.aggregate(
    [
        {
            $lookup: {
                from: "ventasolivos",
                localField: "codoliv",
                foreignField: "detalle.codoliv",
                as: "olivoscompradospor:"
            }
        }
    ]
).pretty()

//Aggregate el cual muestra el dia, mes y año, divididos. 
//Además del Nombre del Cliente/Empresa con el código de la venta en cuestión(es igual que el codigo del cliente),
//y el total a pagar por la venta de olivos. Todo ello ordenado según el dinero conseguido por las ventas.
db.ventasolivos.aggregate([
    {
        $unwind: "$detalle"
    },
    {
        $lookup: {
            from: "catolivos",
                localField: "detalle.codoliv",
                foreignField: "codoliv",
                as: "inforolivos"
        }
    },
    {
        $set: {
            preciovendidos: { $arrayElemAt: ["$inforolivos.precio", -1] },
            }
    },
    {
        $project: {
            _id: 0,
            "codigoventa": "$codcli",
            "dia": { $dayOfMonth: "$fechaven" },
            "mes": { $month: "$fechaven" },
            "año": { $year: "$fechaven" },
            "cliente": 1,
            "codigoolivos": "$inforolivos.cod",
            "nombreolivos": "$nomoliv",
            "cantidadoliv": "$detalle.cantidad",
            "preciovendidos": 1,
            "totalventas": { $multiply: ["$detalle.cantidad",
             "$preciovendidos"] }
        }
    },
    {
        $group: {
            _id: {
                "codigoventas": "$codigoventa",
                "dia": "$dia",
                "mes": "$mes",
                "año": "$año",
                "cliente": "$cliente"
            },
            "conseguidoventas": { $sum: "$totalventas" }
        }
    },
    {
        $sort: {
            "conseguidoventas": -1
        }
    }
]).pretty()

//Agreggate para saber cuánto hace 
//que se realizaron dichas ventas en años decimales de los clientes habituales.
db.ventasolivos.aggregate(
    [ { $match: {"tipocliente":{$eq:"Habitual"}}},
        {
        $project:
          { _id:"$cliente",
            "añosdes": {"$divide":[
                { $subtract:
                 [ new Date(), "$fechaven" ]  }, 1000 * 60 * 60 * 24 * 365]},
        }
      },
    ]
 ).pretty()
