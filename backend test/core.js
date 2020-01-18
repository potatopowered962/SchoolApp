class SignUpElective
{
    constructor(name, description)
    {
        this.name = name
        this.description = description
    }

    name()
    {
        return this.name
    }

    description()
    {
        return this.description
    }

}

export class SignUpButton
{

    constructor(name, description)
    {
        this.name = name
        this.description = description
        this.elective = []
    }

    addelective(name, description)
    {
        var t_elective = new SignUpElective(name, description)
        this.elective.push(t_elective)
    }

    name()
    {
        return this.name
    }

    description()
    {
        return this.description
    }

    electivecount()
    {
        return this.elective.length
    }

    electivename(i)
    {
        if (i < this.electivecount())
        {
            return ''
        }   

        else{
            return this.elective[i].name
        }
    }

    electivedescription(i)
    {
        if (i < this.electivecount())
        {
            return ''
        }   

        else{
         return this.elective[i].description
        }
    }

}