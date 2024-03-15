import { Card } from "./index.js";

export const cards: Partial<Card>[] = [
    {
        name: '1H',
        level: 1,
        variant: 'H',
        back: {
            config: 'swap',
            swap: [
                [
                    ['B1', 'B2', 'B3'],
                    ['A1', 'A2', 'A3'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['C1', 'C2', 'C3'],
                    ['B1', 'B2', 'B3'],
                ],
            ],
            test: [
                [
                    [false, ['level', 'smallest'], false],
                    [false, ['level', 'smallest'], false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, ['level', 'smallest'], false],
                    [false, ['level', 'smallest'], false],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [false, true, false],
                    [true, false, true],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, true, false],
                    [true, false, true],
                ],
                [
                    [false, false, false],
                    [true, false, true],
                    [false, true, false],
                ],
                [
                    [true, false, true],
                    [false, true, false],
                    [false, false, false],
                ],
            ],
            test: [
                [
                    [false, 'value', false],
                    ['value', 'smallest', 'value'],
                    [false, 'value', false],
                ],
            ]
        }
    },
    {
        name: '1V',
        level: 1,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    ['B1', 'A1', false],
                    ['B2', 'A2', false],
                    ['B3', 'A3', false],
                ],
                [
                    [false, 'C1', 'B1'],
                    [false, 'C2', 'B2'],
                    [false, 'C3', 'B3'],
                ],
            ],
            test: [
                [
                    [false, false, false],
                    [['level', 'smallest'], ['level', 'smallest'], false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, ['level', 'smallest'], ['level', 'smallest']],
                    [false, false, false],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [false, true, false],
                    [true, false, false],
                    [false, true, false],
                ],
                [
                    [false, false, true],
                    [false, true, false],
                    [false, false, true],
                ],
                [
                    [false, true, false],
                    [false, false, true],
                    [false, true, false],
                ],
                [
                    [true, false, false],
                    [false, true, false],
                    [true, false, false],
                ],
            ],
            test: [
                [
                    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], false],
                    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], false],
                    [false, false, false],
                ],
                [
                    [false, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
                    [false, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], false],
                    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], false],
                ],
                [
                    [false, false, false],
                    [false, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
                    [false, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
                ],
            ]
        }
    },
    {
        name: '2H',
        level: 2,
        variant: 'H',
        back: {
            config: 'swap',
            swap: [
                [
                    ['B2', 'C2', false],
                    [false, 'A1', 'B1'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['B3', 'C3', false],
                    [false, 'A2', 'B2'],
                ],
            ],
            test: [
                [
                    [false, false, false],
                    [[1, 3], 2, [1, 3]],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[1, 3], 2, [1, 3]],
                ],
                [
                    [[1, 3], 2, [1, 3]],
                    [false, false, false],
                    [false, false, false],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [true, true, false],
                    [false, false, false],
                    [false, true, true],
                ],
            ],
            test: [
                [
                    ['even', 'even', 'even'],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['even', 'even', 'even'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    ['even', 'even', 'even'],
                ],
            ]
        }
    },
    {
        name: '2V',
        level: 2,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    [false, 'A2', false],
                    ['B1', 'A3', false],
                    ['B2', false, false],
                ],
                [
                    [false, false, 'B2'],
                    [false, 'C1', 'B3'],
                    [false, 'C2', false],
                ],
            ],
            test: [
                [
                    [false, [1, 3], false],
                    [false, 2, false],
                    [false, [1, 3], false],
                ],
                [
                    [[1, 3], false, false],
                    [2, false, false],
                    [[1, 3], false, false],
                ],
                [
                    [false, false, [1, 3]],
                    [false, false, 2],
                    [false, false, [1, 3]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [false, false, true],
                    [true, false, true],
                    [true, false, false],
                ],
            ],
            test: [
                [
                    [false, 2, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 2, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 2, false],
                ],
            ]
        }
    },
    {
        name: '3H',
        level: 3,
        variant: 'H',
        back: {
            config: 'swap',
            swap: [
                [
                    [false, 'A2', false],
                    ['B1', 'A3', false],
                    ['B2', false, false],
                ],
                [
                    [false, false, 'B2'],
                    [false, 'C1', 'B3'],
                    [false, 'C2', false],
                ],
            ],
            test: [
                [
                    [false, [1, 3], false],
                    [false, 2, false],
                    [false, [1, 3], false],
                ],
                [
                    [[1, 3], false, false],
                    [2, false, false],
                    [[1, 3], false, false],
                ],
                [
                    [false, false, [1, 3]],
                    [false, false, 2],
                    [false, false, [1, 3]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [false, false, true],
                    [false, false, false],
                    [true, false, false],
                ],
                [
                    [true, false, false],
                    [false, false, false],
                    [false, false, true],
                ],
            ],
            test: [
                [
                    [[3, 'level'], false, false],
                    [false, false, false],
                    [false, false, [3, 'level']],
                ],
                [
                    [false, false, [3, 'level']],
                    [false, false, false],
                    [[3, 'level'], false, false],
                ],
            ]
        }
    },
    {
        name: '3V',
        level: 3,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    ['B1', 'A1', false],
                    ['B2', 'A2', false],
                    [false, false, false],
                ],
                [
                    [false, 'C1', 'B1'],
                    [false, 'C2', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['B2', 'A2', false],
                    ['B3', 'A3', false],
                ],
                [
                    [false, false, false],
                    [false, 'C2', 'B2'],
                    [false, 'C3', 'B3'],
                ],
                [
                    ['A2', 'B2', false],
                    ['A1', 'B1', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['A3', 'B3', false],
                    ['A2', 'B2', false],
                ],
                [
                    [false, 'B2', 'C2'],
                    [false, 'B1', 'C1'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'B3', 'C3'],
                    [false, 'B2', 'C2'],
                ],
            ],
            test: [
                [
                    [false, [2, 4], false],
                    [false, 3, false],
                    [false, [2, 4], false],
                ],
                [
                    [[2, 4], false, false],
                    [3, false, false],
                    [[2, 4], false, false],
                ],
                [
                    [false, false, [2, 4]],
                    [false, false, 3],
                    [false, false, [2, 4]],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: [
                [
                    ['C1', false, 'A1'],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['C2', false, 'A2'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    ['C3', false, 'A3'],
                ],
                [
                    ['A3', false, false],
                    [false, false, false],
                    ['A1', false, false],
                ],
                [
                    [false, 'B3', false],
                    [false, false, false],
                    [false, 'B1', false],
                ],
                [
                    [false, false, 'C3'],
                    [false, false, false],
                    [false, false, 'C1'],
                ],
            ],
            test: [
                [
                    [false, 3, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 3, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 3, false],
                ],
            ]
        }
    },
    {
        name: '4H',
        level: 4,
        variant: 'H',
        back: {
            config: 'swap',
            swap: [
                [
                    [false, 'A3', 'B3'],
                    [false, false, false],
                    ['B1', 'C1', false],
                ],
            ],
            test: [
                [
                    [false, false, false],
                    [[3, 5], 4, [3, 5]],
                    [false, false, false],
                ],
                [
                    [[3, 5], 4, [3, 5]],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[3, 5], 4, [3, 5]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [false, true, true],
                    [true, true, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, true, true],
                    [true, true, false],
                ],
            ],
            test: [
                [
                    [false, 4, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 4, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 4, false],
                ],
            ]
        }
    },
    {
        name: '4V',
        level: 4,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    ['C2', false, false],
                    ['C3', false, 'A1'],
                    [false, false, 'A2'],
                ],
            ],
            test: [
                [
                    [false, [3, 5], false],
                    [false, 4, false],
                    [false, [3, 5], false],
                ],
                [
                    [[3, 5], false, false],
                    [4, false, false],
                    [[3, 5], false, false],
                ],
                [
                    [false, false, [3, 5]],
                    [false, false, 4],
                    [false, false, [3, 5]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [true, false, false],
                    [true, true, false],
                    [false, true, false],
                ],
                [
                    [false, true, false],
                    [false, true, true],
                    [false, false, true],
                ],
            ],
            test: [
                [
                    [[4, 'level'], false, false],
                    [false, [4, 'level'], false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, [4, 'level'], false],
                    [false, false, [4, 'level']],
                ],
                [
                    [false, false, false],
                    [[4, 'level'], false, false],
                    [false, [4, 'level'], false],
                ],
                [
                    [false, [4, 'level'], false],
                    [false, false, [4, 'level']],
                    [false, false, false],
                ],
                [
                    [false, [4, 'level'], false],
                    [[4, 'level'], false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, [4, 'level'], false],
                    [[4, 'level'], false, false],
                ],
                [
                    [false, false, [4, 'level']],
                    [false, [4, 'level'], false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, [4, 'level']],
                    [false, [4, 'level'], false],
                ],
            ]
        }
    },
    {
        name: '5H',
        level: 5,
        variant: 'H',
        back: {
            config: 'swap',
            swap: 5,
            test: [
                [
                    [[4, 6], 5, [4, 6]],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[4, 6], 5, [4, 6]],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[4, 6], 5, [4, 6]],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: 'level',
            test: [
                [
                    [[5, 'level'], false, [5, 'level']],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[5, 'level'], false, [5, 'level']],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[5, 'level'], false, [5, 'level']],
                ],
            ]
        }
    },
    {
        name: '5V',
        level: 5,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    [false, false, false],
                    ['B2', 'A2', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'C2', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, 'B2', false],
                    [false, 'B1', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'B3', false],
                    [false, 'B2', false],
                ],
            ],
            test: [
                [
                    [[4, 6], false, false],
                    [5, false, false],
                    [[4, 6], false, false],
                ],
                [
                    [false, [4, 6], false],
                    [false, 5, false],
                    [false, [4, 6], false],
                ],
                [
                    [false, false, [4, 6]],
                    [false, false, 5],
                    [false, false, [4, 6]],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: [
                [
                    ['B2', false, false],
                    [false, 'A1', false],
                    [false, false, false],
                ],
                [
                    [false, 'B2', false],
                    [false, 'B1', false],
                    [false, false, false],
                ],
                [
                    [false, false, 'B2'],
                    [false, 'C1', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'C2', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'C3', false],
                    [false, false, 'B2'],
                ],
                [
                    [false, false, false],
                    [false, 'B3', false],
                    [false, 'B2', false],
                ],
                [
                    [false, false, false],
                    [false, 'A3', false],
                    ['B2', false, false],
                ],
                [
                    [false, false, false],
                    ['B2', 'A2', false],
                    [false, false, false],
                ],
            ],
            test: [
                [
                    [[5, 'level'], false, false],
                    [false, false, false],
                    [[5, 'level'], false, false],
                ],
                [
                    [false, [5, 'level'], false],
                    [false, false, false],
                    [false, [5, 'level'], false],
                ],
                [
                    [false, false, [5, 'level']],
                    [false, false, false],
                    [false, false, [5, 'level']],
                ],
            ]
        }
    },
    {
        name: '6H',
        level: 6,
        variant: 'H',
        back: {
            config: 'rearrange',
            rearrange: [
                [
                    [true, false, true],
                    [false, false, false],
                    [true, false, true],
                ],
            ],
            test: [
                [
                    [[5, 7], 6, [5, 7]],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[5, 7], 6, [5, 7]],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[5, 7], 6, [5, 7]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [true, true, false],
                    [true, true, false],
                    [false, false, false],
                ],
                [
                    [false, true, true],
                    [false, true, true],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [true, true, false],
                    [true, true, false],
                ],
                [
                    [false, false, false],
                    [false, true, true],
                    [false, true, true],
                ],
            ],
            test: [
                [
                    [false, 6, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 6, false],
                ],
                [
                    [false, false, false],
                    [false, 6, false],
                    [false, false, false],
                ],
            ]
        }
    },
    {
        name: '6V',
        level: 6,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    [false, 'C2', false],
                    ['B1', false, 'B3'],
                    [false, 'A2', false],
                ],
                [
                    [false, 'A2', false],
                    ['B3', false, 'B1'],
                    [false, 'C2', false],
                ],
            ],
            test: [
                [
                    [[5, 7], false, false],
                    [6, false, false],
                    [[5, 7], false, false],
                ],
                [
                    [false, [5, 7], false],
                    [false, 6, false],
                    [false, [5, 7], false],
                ],
                [
                    [false, false, [5, 7]],
                    [false, false, 6],
                    [false, false, [5, 7]],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: [
                [
                    ['B1', 'B2', false],
                    ['A1', 'A2', false],
                    [false, false, false],
                ],
                [
                    ['A2', 'A1', false],
                    ['B2', 'B1', false],
                    [false, false, false],
                ],
                [
                    [false, 'C1', 'C2'],
                    [false, 'B1', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, 'B2', 'B1'],
                    [false, 'C2', 'C1'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['B2', 'B3', false],
                    ['A2', 'A3', false],
                ],
                [
                    [false, false, false],
                    ['A3', 'A2', false],
                    ['B3', 'B2', false],
                ],
                [
                    [false, false, false],
                    [false, 'C2', 'C3'],
                    [false, 'B2', 'B3'],
                ],
                [
                    [false, false, false],
                    [false, 'B3', 'B2'],
                    [false, 'C3', 'C2'],
                ],
            ],
            test: [
                [
                    [false, [6, 'level'], false],
                    [false, [6, 'level'], false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, [6, 'level'], false],
                    [false, [6, 'level'], false],
                ],
                [
                    [[6, 'level'], false, false],
                    [[6, 'level'], false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[6, 'level'], false, false],
                    [[6, 'level'], false, false],
                ],
                [
                    [false, false, [6, 'level']],
                    [false, false, [6, 'level']],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, [6, 'level']],
                    [false, false, [6, 'level']],
                ],
                [
                    [[6, 'level'], [6, 'level'], false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, [6, 'level'], [6, 'level']],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[6, 'level'], [6, 'level'], false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, [6, 'level'], [6, 'level']],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[6, 'level'], [6, 'level'], false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, [6, 'level'], [6, 'level']],
                ],
            ]
        }
    },
    {
        name: '7H',
        level: 7,
        variant: 'H',
        back: {
            config: 'swap',
            swap: [
                [
                    ['A2', 'A1', 'B1'],
                    ['B2', 'C2', 'C1'],
                    [false, false, false],
                ],
                [
                    ['B1', 'C1', 'C2'],
                    ['A1', 'A2', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['A3', 'A2', 'B2'],
                    ['B3', 'C3', 'C2'],
                ],
                [
                    [false, false, false],
                    ['B2', 'C2', 'C3'],
                    ['A2', 'A3', 'B3'],
                ],
            ],
            test: [
                [
                    [[6, 8], 7, [6, 8]],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[6, 8], 7, [6, 8]],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[6, 8], 7, [6, 8]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [true, true, true],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [true, true, true],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [true, true, true],
                ],
            ],
            test: [
                [
                    [false, ['largest', 'smallest'], ['largest', 'smallest']],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, ['largest', 'smallest'], ['largest', 'smallest']],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, ['largest', 'smallest'], ['largest', 'smallest']],
                ],
            ]
        }
    },
    {
        name: '7V',
        level: 7,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    ['A2', 'A1', false],
                    ['A3', 'B1', false],
                    ['B3', 'B2', false],
                ],
                [
                    ['B1', 'B2', false],
                    ['A1', 'B3', false],
                    ['A2', 'A3', false],
                ],
                [
                    [false, 'C1', 'C2'],
                    [false, 'B1', 'C3'],
                    [false, 'B2', 'B3'],
                ],
                [
                    [false, 'B2', 'B1'],
                    [false, 'B3', 'C1'],
                    [false, 'C3', 'C2'],
                ],
            ],
            test: [
                [
                    [[6, 8], false, false],
                    [7, false, false],
                    [[6, 8], false, false],
                ],
                [
                    [false, [6, 8], false],
                    [false, 7, false],
                    [false, [6, 8], false],
                ],
                [
                    [false, false, [6, 8]],
                    [false, false, 7],
                    [false, false, [6, 8]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [false, true, false],
                    [false, true, false],
                    [false, true, false],
                ],
                [
                    [true, false, false],
                    [true, false, false],
                    [true, false, false],
                ],
                [
                    [false, false, true],
                    [false, false, true],
                    [false, false, true],
                ],
            ],
            test: [
                [
                    [false, 7, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 7, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 7, false],
                ],
            ]
        }
    },
    {
        name: '7V',
        level: 7,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    ['A2', 'A1', false],
                    ['A3', 'B1', false],
                    ['B3', 'B2', false],
                ],
                [
                    ['B1', 'B2', false],
                    ['A1', 'B3', false],
                    ['A2', 'A3', false],
                ],
                [
                    [false, 'C1', 'C2'],
                    [false, 'B1', 'C3'],
                    [false, 'B2', 'B3'],
                ],
                [
                    [false, 'B2', 'B1'],
                    [false, 'B3', 'C1'],
                    [false, 'C3', 'C2'],
                ],
            ],
            test: [
                [
                    [[6, 8], false, false],
                    [7, false, false],
                    [[6, 8], false, false],
                ],
                [
                    [false, [6, 8], false],
                    [false, 7, false],
                    [false, [6, 8], false],
                ],
                [
                    [false, false, [6, 8]],
                    [false, false, 7],
                    [false, false, [6, 8]],
                ],
            ]
        },
        face: {
            config: 'rearrange',
            rearrange: [
                [
                    [false, true, false],
                    [false, true, false],
                    [false, true, false],
                ],
                [
                    [true, false, false],
                    [true, false, false],
                    [true, false, false],
                ],
                [
                    [false, false, true],
                    [false, false, true],
                    [false, false, true],
                ],
            ],
            test: [
                [
                    [false, 7, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 7, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 7, false],
                ],
            ]
        }
    },
    {
        name: '8H',
        level: 8,
        variant: 'H',
        back: {
            config: 'rearrange',
            rearrange: [
                [
                    [true, false, true],
                    [true, false, true],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [true, false, true],
                    [true, false, true],
                ],
            ],
            test: [
                [
                    [[7, 9], 8, [7, 9]],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [[7, 9], 8, [7, 9]],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [[7, 9], 8, [7, 9]],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: [
                [
                    [false, false, 'A2'],
                    ['C1', false, false],
                    [false, false, false],
                ],
                [
                    ['C2', false, false],
                    [false, false, 'A1'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['C3', false, false],
                    [false, false, 'A2'],
                ],
                [
                    [false, false, false],
                    [false, false, 'A3'],
                    ['C2', false, false],
                ],
            ],
            test: [
                [
                    ['smallest', 'largest', false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['smallest', 'largest', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    ['smallest', 'largest', false],
                ],
            ]
        }
    },
    {
        name: '8V',
        level: 8,
        variant: 'V',
        back: {
            config: 'rearrange',
            rearrange: [
                [
                    [true, true, false],
                    [false, false, false],
                    [true, true, false],
                ],
                [
                    [false, true, true],
                    [false, false, false],
                    [false, true, true],
                ],
            ],
            test: [
                [
                    [[7, 9], false, false],
                    [8, false, false],
                    [[7, 9], false, false],
                ],
                [
                    [false, [7, 9], false],
                    [false, 8, false],
                    [false, [7, 9], false],
                ],
                [
                    [false, false, [7, 9]],
                    [false, false, 8],
                    [[7, 9], 8, [7, 9]],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: [
                [
                    [false, 'A3', false],
                    [false, false, false],
                    ['B1', false, false],
                ],
                [
                    [false, false, 'B3'],
                    [false, false, false],
                    [false, 'C1', false],
                ],
                [
                    [false, 'C3', false],
                    [false, false, false],
                    [false, false, 'B1'],
                ],
                [
                    ['B3', false, false],
                    [false, false, false],
                    [false, 'A1', false],
                ],
            ],
            test: [
                [
                    [false, 8, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 8, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 8, false],
                ],
            ]
        }
    },
    {
        name: '9H',
        level: 9,
        variant: 'H',
        back: {
            config: 'swap',
            swap: [
                [
                    ['B1', 'A1', false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['B2', 'A2', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    ['B3', 'A3', false],
                ],
                [
                    [false, 'C1', 'B1'],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'C2', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 'C3', 'B3'],
                ],
                [
                    ['A2', false, false],
                    ['A1', false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['A3', false, false],
                    ['A2', false, false],
                ],
                [
                    [false, 'B2', false],
                    [false, 'B1', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'B3', false],
                    [false, 'B2', false],
                ],
                [
                    [false, false, 'C2'],
                    [false, false, 'C1'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, 'C3'],
                    [false, false, 'C2'],
                ],
            ],
            test: [
                [
                    [false, 'largest', false],
                    [false, 'level', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'largest', false],
                    [false, 'level', false],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: [
                [
                    ['B1', 'A1', false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['B2', 'A2', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    ['B3', 'A3', false],
                ],
                [
                    [false, 'C1', 'B1'],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'C2', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 'C3', 'B3'],
                ],
            ],
            test: [
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 8, false],
                ],
            ]
        }
    },
    {
        name: '9V',
        level: 9,
        variant: 'V',
        back: {
            config: 'swap',
            swap: [
                [
                    ['B1', 'A1', false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['B2', 'A2', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    ['B3', 'A3', false],
                ],
                [
                    [false, 'C1', 'B1'],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'C2', 'B2'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 'C3', 'B3'],
                ],
                [
                    ['A2', false, false],
                    ['A1', false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    ['A3', false, false],
                    ['A2', false, false],
                ],
                [
                    [false, 'B2', false],
                    [false, 'B1', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'B3', false],
                    [false, 'B2', false],
                ],
                [
                    [false, false, 'C2'],
                    [false, false, 'C1'],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, 'C3'],
                    [false, false, 'C2'],
                ],
            ],
            test: [
                [
                    [false, 'largest', false],
                    [false, 'level', false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, 'largest', false],
                    [false, 'level', false],
                ],
            ]
        },
        face: {
            config: 'swap',
            swap: [
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
            ],
            test: [
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, false, false],
                ],
                [
                    [false, false, false],
                    [false, false, false],
                    [false, 8, false],
                ],
            ]
        }
    },
];