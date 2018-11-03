alert(`Esta é uma simulação de empréstimo, com as regras: Será aprovado se você tiver entre 25 e 65 anos, se a sua renda for maior ou igual a 1500 e o valor do seu empréstimo seja entre 1000 reais e sua renda multiplica por 10`);

let idade = Number(prompt(`Digite sua idade:`));

if (idade < 25 || idade > 65) {
    alert(`Você não tem a idade requerida para a aprovação deste empréstimo.`);
}

else if (idade >= 25 && idade <= 65) {
    let renda = Number(prompt(`Digite a sua renda:`));

    if (renda < 1500) {
        alert(`Sua renda não está na faixa requerida para a aprovação deste empréstimo.`);
    }

    else if (renda >= 1500) {
        let valor = Number(prompt(`Digite o valor do empréstimo:`))

        if (valor < 1000) {
            alert((`O valor requerido é menor que a faixa para aprovação deste empréstimo.`));
        }

        else if (valor > renda * 10) {
            alert((`O valor requerido é maior que a faixa para aprovação deste empréstimo.`));
        }

        else {
            alert(`Seu empréstimo foi APROVADO! Sendo assim temos as opções de parcelas: Parcelas entre 5 e 24 meses`);
            let parcelas = Number(prompt(`Insira a quantidade de parcelas que você deseja:`));         

            if (parcelas >= 5 && parcelas <= 24) {
                valor = (valor * 0.08) + valor;
                let valorparcela = valor / parcelas;
                alert(`Empréstimo aprovado em ${parcelas} parcelas de R$${valorparcela}.`);
            }
            
            else if (parcelas < 5) {
                valor = (valor * 0.08) + valor;
                let valorparcela = valor / 5;
                alert(`Empréstimo aprovado em 5 parcelas de R$${valorparcela}.`);
            }

            else if (parcelas > 24) {
                valor = (valor * 0.08) + valor;
                let valorparcela = valor / 24;
                alert(`Empréstimo aprovado em 24 parcelas de R$${valorparcela}.`);
            }
        }
    }
}