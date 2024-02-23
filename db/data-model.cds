namespace successfactor.fnapis;

entity funapiinp {
    servicetype : String;
    data        : String;
    response    : Composition of many response
                      on response.parent = $self;
}

entity response {
    parent       : Association to funapiinp;
    success      : String;
    data         : String;
    entity       : String ;
    errordetails : Composition of one errorDetails
                       on errordetails.parent = $self;

}

entity errorDetails {
        parent  : Association to response;
    key code    : String;
        message : String;

}
