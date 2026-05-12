const productos = {
    cuadernos: [
        { 
            nombre: "Cuaderno Profesional Rayado", 
            marca: "Scribe", 
            precio: "$30.00", 
            img: "https://superpapelera.com.mx/wp-content/uploads/2023/05/143017970.webp" 
        },
        { 
            nombre: "Cuaderno Profesional Cosido", 
            marca: "Norma", 
            precio: "$60.00", 
            img: "https://orpamex.com.mx/1230-large_default/cuaderno-profesional-cosido-color-360o-100-hojas-cuadro-chico.jpg" 
        }
    ],
    boligrafos: [
        { 
            nombre: "Bolígrafo de Gel G2 0.7mm", 
            marca: "Pilot", 
            precio: "$35.00", 
            img: "https://officemax.vtexassets.com/arquivos/ids/1350146/74990_1.jpg?v=638158835999230000" 
        },
        { 
            nombre: "Bolígrafo Cristal Medium", 
            marca: "Bic", 
            precio: "$10.00", 
            img: "https://m.media-amazon.com/images/I/41GCbY2HlyL._AC_UF894,1000_QL80_.jpg" 
        }
    ],
    colores: [
        { 
            nombre: "Lápices de Color Premier (24)", 
            marca: "Prismacolor", 
            precio: "$520.00", 
            img: "https://officemax.vtexassets.com/arquivos/ids/1421946/50084685_1.jpg?v=638536591816070000" 
        },
        { 
            nombre: "Ecolápices de Color (12)", 
            marca: "Faber-Castell", 
            precio: "$180.00", 
            img: "https://lumen.com.mx/Content/Images/productPics/lapiz-color-fc-120112-ecolapiz-hexagonal-con-12-piezas-marca-faber-castell-sku-7348.jpg" 
        }
    ],
    reglas: [
        { 
            nombre: "Escalímetro Profesional", 
            marca: "Staedtler", 
            precio: "$215.00", 
            img: "https://i5.walmartimages.com/asr/da8670d5-cb05-4618-97d9-0341b6830065.8de578052ccd7beaaf5591c6f3a36772.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" 
        },
        { 
            nombre: "Regla de Aluminio 30cm", 
            marca: "Baco", 
            precio: "$45.00", 
            img: "https://http2.mlstatic.com/D_834746-MLM89455289613_082025-C.jpg" 
        }
    ]
};

// Agregamos el parámetro shouldScroll (por defecto es true)
function showProducts(cat, shouldScroll = true) {
    const display = document.getElementById('product-display');
    const grid = document.getElementById('products-grid');
    const title = document.getElementById('category-title');
    
    grid.innerHTML = ""; 
    display.classList.remove('hidden');
    title.innerText = "Artículos de " + cat.charAt(0).toUpperCase() + cat.slice(1);

    if (productos[cat]) {
        productos[cat].forEach(p => {
            grid.innerHTML += `
                <div class="product-card">
                    <span class="brand-tag">${p.marca}</span>
                    <img src="${p.img}" alt="${p.nombre}" onerror="this.src='https://via.placeholder.com/200?text=Imagen+No+Disponible'">
                    <h4>${p.nombre}</h4>
                    <p class="price">${p.precio}</p>
                    <button class="add-btn">Agregar</button>
                </div>
            `;
        });
    } else {
        grid.innerHTML = "<p style='padding:20px;'>Próximamente más productos en esta sección.</p>";
    }

    // Solo hace el scroll si es un clic del usuario (shouldScroll es true)
    if (shouldScroll) {
        display.scrollIntoView({ behavior: 'smooth' });
    }
}

// Control del Carrusel
const carousel = document.getElementById('carousel');
document.getElementById('nextBtn').onclick = () => carousel.scrollLeft += 250;
document.getElementById('prevBtn').onclick = () => carousel.scrollLeft -= 250;