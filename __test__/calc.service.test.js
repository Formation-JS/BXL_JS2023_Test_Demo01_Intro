const calcService = require('./../services/calc.service')

describe('Calc Service', () => {

    describe('Addition', () => {

        test('Two number', () => {

            // Arrange
            const nb1 = 2;
            const nb2 = 3;
            const expected = 5;

            // Action
            const actual = calcService.add(nb1, nb2);

            // Asset
            expect(actual).toEqual(expected);

        });

        test('Five number', () => {

            // Arrange
            const nb1 = 3;
            const nb2 = 6;
            const nb3 = 42;
            const nb4 = -5;
            const nb5 = 9;
            const expected = 55;

            // Action
            const actual = calcService.add(nb1, nb2, nb3, nb4, nb5);

            // Assert
            expect(actual).toEqual(expected);

        });

        test('Error if less 2 number', () => {

            // Arrange
            const nb1 = 18;

            // Action + Assert
            expect(() => {
                // Zone qui doit provoquer une erreur
                calcService.add(nb1);

            }).toThrow('Add must be have 2 numbers');

        });

    })
})

