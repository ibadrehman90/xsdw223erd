import Light from '../models/Light.js';

export const getDashboardsInfo = (req, res) => {

    Light.findAll().then(data => {
        let final = {};

        data.map((v) => {
            if (final[v.dashboard]) {
                final[v.dashboard].lights.push(v);
            } else {
                final[v.dashboard] = { lights: [v] };
            }
        })

        res.status(200).json(final);
    }).catch(err => {
        res.status(500).send("An error occured while finding dashboards")
    });

}

export const saveLight = async (req, res) => {
    Light.create(req.body).then(data => res.status(201).send("Light saved!")).catch(err => res.status(500).send(err.message));
}

export const updateLight = async (req, res) => {
    const { id } = req.params;
    const value = req.body;

    if (!value) {
        res.status(500).send("Please put the values to update");
    }

    const user = await Light.findOne({ where: { id } });
    Object.keys(value).map(v => {
        user[v] = value[v];
    })
    await user.save();
    res.status(201).send("Updated!");
}

export const deleteLight = (req, res) => {
    const { id } = req.params;

    Light.destroy({ where: { id } }).then(data => res.status(200).send("Deleted!")).catch(err => res.status(500).send(err.message));
}