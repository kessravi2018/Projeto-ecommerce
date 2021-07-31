import React from 'react';

import ItemBeneficio from '../../components/Item/Beneficio';

const Beneficios = () => (
    <div className="Beneficios">
        <div className="container flex horizontal-mb wrap-mb">
            <ItemBeneficio 
                icone="fa-credit-card" 
                texto="Em 12x sem juros para todo o site" />
            <ItemBeneficio 
                icone="fa-truck" 
                texto="Entregamos em todos o Brasil" />
            <ItemBeneficio 
                icone="fa-refresh" 
                texto="30 dias para trocar o seu produto" />
            <ItemBeneficio 
                icone="fa-handshake-o" 
                texto="Fornecedores oficiais" />
        </div>
    </div>
)

export default Beneficios;