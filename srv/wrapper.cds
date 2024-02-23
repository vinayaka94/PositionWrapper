using successfactor.fnapis as db from '../db/data-model';

service funapis {
    entity funapis as projection on db.funapiinp;
}
