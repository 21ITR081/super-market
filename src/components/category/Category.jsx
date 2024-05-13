import { useNavigate } from "react-router";

// category 
const category = [
    {
 image: 'https://www.bigbasket.com/media/uploads/p/l/281026-2_8-cadbury-dairy-milk-chocolate.jpg',
        name: 'Chocolate'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/1220940_2-ariel-matic-liquid-detergent-front-loadsuper-saver-pack.jpg',
        name: 'Detergent'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/40295212_2-bb-royal-sona-masoori-raw-rice-super-premium-12-months-old.jpg',
        name: 'Rice'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/306170_7-lifebuoy-total-germ-protection-soap-bar.jpg',
        name: 'Soap'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/20000465_3-bb-royal-marathi-moggu.jpg',
        name: 'Spice'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/1223297_1-amul-ice-cream-chocolate-brownie.jpg',
        name: 'Icecreams'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/1212281-2_1-sprite-soft-drink-lime-flavoured.jpg',
        name: 'Soft Drinks'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/100012372-2_13-britannia-little-hearts-classic-sugar-sprinkled-heart-shaped-biscuits.jpg',
        name: 'Snacks'
    },
    {
        image: 'https://www.bigbasket.com/media/uploads/p/l/40247228_2-bru-instant-coffee-chicory-mix-fresh-aromatic-no-preservatives.jpg',
        name:'Cafe'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-8">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-green-10 transition-all cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;
