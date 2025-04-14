import React from 'react'
import pic01 from './Assets/tops/Linen Top  Blue.jpg'
import pic02 from './Assets/tops/Lisa Shirt.jpg'
import pic03 from './Assets/tops/Lounge Tunic  Black.jpg'
import pic04 from './Assets/tops/Lounge Tunic  Blue.jpg'
import pic05 from './Assets/tops/Lounge Tunic  Cream.jpg'
import pic06 from './Assets/tops/Poplin Shirt.jpg'
import pic07 from './Assets/tops/Sonia Skirt.jpg'
import pic08 from './Assets/tops/Terra Cotta Studio Top.jpg'
import pic09 from './Assets/bottoms/Jacky Trousers.jpg'
import pic10 from './Assets/bottoms/Jane Skirt.jpg'
import pic11 from './Assets/bottoms/Romy Trousers.jpg'
import pic12 from './Assets/bottoms/Wide Pant  Blue.jpg'
import pic13 from './Assets/bottoms/Wide Pant.jpg'

const data = {
    tops:[
        {
            id:1,
            name:"Linen Top Blue",
            img:pic01,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 2700.00  
        },
        {
            id:2,
            name:"Lisa Shirt",
            img:pic02,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 3000.00  
        },
        {
            id:3,
            name:"Lounge Tunic Black",
            img:pic03,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 3400.00  
        },
        {
            id:4,
            name:"Lounge Tunic Blue",
            img:pic04,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 4500.00  
        },
        {
            id:5,
            name:"Lounge Tunic Cream",
            img:pic05,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 5200.00  
        },
        {
            id:6,
            name:"Poplin Shirt",
            img:pic06,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 3600.00  
        },{
            id:7,
            name:"Sonia Skirt",
            img:pic07,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 4000.00  
        },{
            id:8,
            name:"Terra Cotta Studio Top",
            img:pic08,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 3200.00  
        }
    ], 
    bottoms:[
        {
            id:9,
            name:"Jacky Trouser",
            img:pic09,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 2200.00  
        },{
            id:10,
            name:"Jane Skirt",
            img:pic10,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 4500.00  
        },{
            id:11,
            name:"Romy Trousers",
            img:pic11,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 1400.00  
        }, {
            id:12,
            name:"Wide Pant Blue",
            img:pic12,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 2500.00  
        },{
            id:13,
            name:"Wide Pant",
            img:pic13,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid soluta,qui architecto cum ducimus id. Repudiandae, enim magni iusto at placeat rerum sequi perferendis quae illo possimus incidunt. Dolorem?",
            details: ["100% Cotton", "Machine wash cold ","Tumble dry low"],
            price: 5200.00  
        }  
    ], sales:[]
}

export default data;