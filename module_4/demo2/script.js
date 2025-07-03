//variables
var age = 22;
// age = "coucou"
var job = "Dev";
job = 60000;
var ThingSylvainLike = /** @class */ (function () {
    function ThingSylvainLike(name, loveLevel) {
        if (loveLevel === void 0) { loveLevel = 1; }
        this.loveLevel = loveLevel;
        this.frequency = 19;
        this._name = name;
    }
    Object.defineProperty(ThingSylvainLike.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ThingSylvainLike.prototype.display = function () {
        console.log("Sylvain aime ".concat(this._name, " sur une \u00E9chelle de ").concat(this.loveLevel, "/10"));
    };
    ThingSylvainLike.prototype.getFrequency = function () {
        return this.frequency;
    };
    return ThingSylvainLike;
}());
var holiday = new ThingSylvainLike("Vacances", 9);
var ctf = new ThingSylvainLike("CTF", 7);
holiday.name = "Argent";
holiday.display();
ctf.display();
var truc = {
    frequency: 12,
    getFrequency: function () {
        return this.frequency;
    }
};
