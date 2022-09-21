import { Router } from "express";

const router:Router = Router();


const getInfo = "Después de los eventos devastadores de 'Vengadores: Infinity War', el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga 'Vengadores'."

router
    
    .get('/', (req, res)=>{
        res.render('layouts/temporal.ejs', {info:getInfo})

    })

router.get('/')



export default router