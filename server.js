const express = require('express');
const app = express()
app.use(express.static('public'));

app.post('/phoneLocation', (req, res) => {
    setTimeout(() => {
        res.json({
            success: true,
            type: 1,
            obj: {
                province: '关东',
                city:'深圳'
            }
        })
    },1000)
})
app.post('/faceList', (req, res) => {
    setTimeout(() => {
        res.json(
            {
                success: true,
                obj:['20元', '30元', '50元']
            }
            
        )
    }, 1000);
})




app.listen(3000, () => {
    console.log('sever start')
})