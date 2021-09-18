const Room = require('../models/room');

exports.createRooms = async () => {
    try {
        const count = await Room.estimatedDocumentCount();
        if (count > 0) return;
        const values = await Promise.all([
            new Room({ name: 'CAM' }).save(),
            new Room({ name: 'CAR' }).save(),
            new Room({ name: 'PR' }).save(),
            new Room({ name: 'MX' }).save()
        ]);
    } catch (error) {
        console.error(error);
    }
};
