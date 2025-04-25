describe('Los estudiantes under monkeys', function () {
    it('visits los estudiantes and random event monkeys', function () {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    });
});

function randomEvent(monkeysLeft) {
    if (monkeysLeft <= 0) {
        cy.log('Monkey finalizar');
        return;
    }

    var eventos = ['link-azar', 'fill-input', 'select-azar', 'click-button'];
    var tipo = eventos[Math.floor(Math.random() * eventos.length)];
    cy.log(`Monkey ejecutar: ${tipo}`);

    if (tipo === 'link-azar') {
        var links = Cypress.$('a');
        if (monkeysLeft > 0) {
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if (!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true}).then(() => {
                        cy.log(`Monkey ejecutó: ${tipo}`);
                        monkeysLeft = monkeysLeft - 1;
                        cy.wait(1000);
                        randomEvent(monkeysLeft);
                    });
                } else {
                    cy.log(`Monkey no ejecutó: ${tipo}`);
                    cy.wait(1000);
                    randomEvent(monkeysLeft);
                }
            });
        }
    } else if (tipo === 'fill-input') {
        if (Cypress.$('input').length > 0) {
            cy.get('input').then($inputs => {
                if ($inputs.length > 0) {
                    var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                    if (!Cypress.dom.isHidden(randomInput)) {
                        cy.wrap(randomInput).type('Monkey Mankey Primeape', {force: true});
                        cy.log(`Monkey ejecutó: ${tipo}`);
                        monkeysLeft = monkeysLeft - 1;
                    }
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });
        } else {
            cy.log(`Monkey no ejecutó: ${tipo}`);
            cy.wait(1000);
            randomEvent(monkeysLeft);
        }
    } else if (tipo === 'select-azar') {
        if (Cypress.$('select').length > 0) {
            cy.get('select').then($selects => {
                var randomSelect = $selects.get(getRandomInt(0, $selects.length));
                if (!Cypress.dom.isHidden(randomSelect)) {
                    var opciones = randomSelect.options;
                    if (opciones.length > 1) {
                        cy.wrap(randomSelect).select(opciones[getRandomInt(1, opciones.length)].value, {force: true});
                        cy.log(`Monkey ejecutó: ${tipo}`);
                        monkeysLeft = monkeysLeft - 1;
                    }
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });
        } else {
            cy.log(`Monkey no ejecutó: ${tipo}`);
            cy.wait(1000);
            randomEvent(monkeysLeft);
        }
    } else if (tipo === 'click-button') {
        if (Cypress.$('button').length > 0) {
            cy.get('button').then($buttons => {
                if ($buttons.length > 0) {
                    var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                    if (!Cypress.dom.isHidden(randomButton)) {
                        cy.wrap(randomButton).click({force: true});
                        cy.log(`Monkey ejecutó: ${tipo}`);
                        monkeysLeft = monkeysLeft - 1;
                    }
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });
        } else {
            cy.log(`Monkey no ejecutó: ${tipo}`);
            cy.wait(1000);
            randomEvent(monkeysLeft);
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}