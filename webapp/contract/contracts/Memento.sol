//SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Memento {
    struct Box {
        address sender;
        string mementoCid;
        uint256 expirationDate;
        uint256 stake;
    }

    event MementoCreated(address indexed sender, uint256 id);

    mapping(uint256 => Box) private mementoes;

    function create(
        uint256 id,
        string memory mementoCid,
        uint256 expirationDate
    ) public payable {
        require(
            mementoes[id].sender == address(0),
            "Mememento already exists!!"
        );

        require(msg.value > 0, "Stake not set");

        Box memory box = Box({
            sender: msg.sender,
            mementoCid: mementoCid,
            expirationDate: expirationDate,
            stake: msg.value
        });

        mementoes[id] = box;
        emit MementoCreated(box.sender, id);
    }

    function getMemento(uint256 id) public view returns (Box memory) {
        return mementoes[id];
    }
}


// Contract Deployed : 0xc7f5c7f3819b107559567b556207b9fc0619e4a9