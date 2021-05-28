const Update_Body = "Update_Body";
const SendMassage = "SendMassage";

type DelaType={
  name:string
  id:number
}
type MesType={
  messag:string
  id:number
}
type inicializStateType= typeof inicializState
let inicializState = {
  dela: [
    { name: "Valeda", id: 1 },
    { name: "Ant", id: 2 },
    { name: "Anton", id: 3 },
    { name: "Semen", id: 4 },
    { name: "Sasha", id: 5 },
  ] as Array<DelaType>,
  mes: [
    { id: 1, messag: "Hahah" },
    { id: 2, messag: "Lol" },
    { id: 31, messag: "Common" },
    { id: 4, messag: "Kitty" },
    { id: 5, messag: "Madagascar" },
  ]as Array<MesType>,
};

type NewMEssType={
  NewMessageBody: any
}

type AlltypeDialog=SendMessageCreateType|updateSendMessageCreateType
const dialogReducer = (
  state: inicializStateType = inicializState,
  action: AlltypeDialog
): inicializStateType => {
  switch (action.type) {
    case Update_Body:
      return { ...state};

    case SendMassage:
      let body = action.NewMessageBody;
      return {
        ...state,

        mes: [...state.mes, { id: 6, messag: body }],
      };

    default:
      return state;
  }
};
type SendMessageCreateType = {
  type: typeof SendMassage;
  NewMessageBody: string;
};
export const SendMessageCreate = (
  NewMessageBody: string
): SendMessageCreateType => ({
  type: SendMassage,
  NewMessageBody,
});
type updateSendMessageCreateType = {
  type: typeof Update_Body;
  body: string;
};
export const updateSendMessageCreate = (body: string) => ({
  type: Update_Body,
  body,
});
export default dialogReducer;
