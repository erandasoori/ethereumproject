import web3 from "./web3";

const address = "0xE844dD0DFd9877C26aba13D14e6676796026c36e";
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "address_lookup",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0xb985024e"
    },
    {
        "inputs": [],
        "name": "checkPolicyStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x7d91e62e"
    },
    {
        "inputs": [],
        "name": "manager",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x481c6a75"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "pay_these",
                "type": "address[]"
            }
        ],
        "name": "payIndemnity",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true,
        "signature": "0xeaef9d42"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "policy_statement",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0xfd3c35d9"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "passenger_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "flight_number",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "departure_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "departure_city",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destination_city",
                "type": "string"
            }
        ],
        "name": "purchase_policy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true,
        "signature": "0xc50d73f6"
    },
    {
        "inputs": [],
        "name": "view_all_policies",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "passenger_name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "passenger_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "flight_number",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "departure_date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "departure_city",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "destination_city",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "policy_status",
                        "type": "string"
                    }
                ],
                "internalType": "struct InsuranceSystem.PolicyPurchased[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x1a65261c"
    },
    {
        "inputs": [],
        "name": "view_purchased_policy",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "passenger_name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "passenger_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "flight_number",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "departure_date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "departure_city",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "destination_city",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "policy_status",
                        "type": "string"
                    }
                ],
                "internalType": "struct InsuranceSystem.PolicyPurchased",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x2b0a2abc"
    },
    {
        "inputs": [],
        "name": "viw_available_policy",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0xe8d75441"
    }
]

export default new web3.eth.Contract(abi, address);
