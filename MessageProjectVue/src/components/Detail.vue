<template>
    <div id="data" >

        <div style="text-align: center;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="margin: 0 auto; width: 70%; display: flex;">
                    <h3>{{messages.title}}</h3>
                    <div v-if="IsAdmin">
                        <div style="margin-left: auto;">
                            <button id="messageEdit" type="button" v-on:click="MessageEdit()">編輯</button>
                            <button id="messageSubmit" type="button" v-on:click="MessageSubmit(messages.id)" class="d-none">完成</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <textarea id="messageTextarea" style="height: 150px;width: 70%;" readonly>{{messages.content}}</textarea>
            </div>
        </div>

        <div v-for="reply in messages.replys" :key="reply.id" :id="'reply_' + reply.id" style="margin-top:10px">
            <div style="margin:0px auto;width: 70%; display: flex">
                <div style="vertical-align: top;width: 18%">{{ reply.userName }}</div>
                <textarea :id="'textarea_' + reply.id" style="height: auto;width: 72%" readonly>{{ reply.replyContent }}</textarea>
                <div :name="'replyButton_' + reply.userName" class="d-none" style="width: 10%">
                    <button :id="'replyEdit_' + reply.id" :name="reply.userName" v-on:click="EditContent(reply.id)">編輯</button>
                    <button :id="'replySubmit_' + reply.id" :name="reply.userName" v-on:click="EditSubmit(reply.id)" class="d-none">完成</button>
                    <button :name="reply.userName" v-on:click="DeleteReply(reply.id)">刪除</button>
                </div>
            </div>
        </div>
        <hr>
        <div class="reply" style="text-align: center;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="margin:0px auto;width: 70%; display: flex">
                    <textarea id="replyTextarea" style="height: auto;width: 100%" placeholder="回覆内容"></textarea>
                    <button v-on:click="PostReply()">回覆</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>   
    import Commom from '../Commom';
import Common from '../Commom'
    export default{ 
        data() {
            return {
                messages: [],
                isAdmin: false,
                detailId: "",
                identityName: ""
            }
        },
        mounted() {                       
            this.detailId = this.$store.state.message; 
            this.GetDetailContent();
        },
        methods: {
            PostReply() {
                var self = this;
                var url = "/Message/CreateReplyMessage";
                var data = {
                    "MessageId": this.messages.id,
                    "ReplyContent": $("#replyTextarea").val()
                }
                Common.PostCommonAPI(url, data).then((result) => {
                    self.messages.replys.push({
                        id: id,
                        replyContent: content,
                        userName: data
                    });
                    self.GetUserPerssion();
                })
               
            },
            EditContent(id) {
                $("#textarea_" + id).prop("readonly", false);
                $("#replyEdit_" + id).addClass("d-none");
                $("#replySubmit_" + id).removeClass("d-none");
            },
            EditSubmit(id) {
                $("#textarea_" + id).prop("readonly", true);
                $("#replyEdit_" + id).removeClass("d-none");
                $("#replySubmit_" + id).addClass("d-none");
                const content = $("#textarea_" + id).val();
                const url = "/Message/UpdateReply";
                const data = {
                    "Id": id,
                    "ReplyContent": content,
                };
                Commom.PostCommonAPI(url, data);
               
            },
            DeleteReply(id) {
                const url= "/Message/DeleteReply/" + id;
                Commom.GetCommonAPI(url).then((result) => {
                    $("#reply_" + id).remove();
                })
                
            },
            GetUserPerssion() {               
                const self = this;
                const url = "/Message/GetUserPerssion";
                Commom.GetCommonAPI(url).then((result) => {
                    if (result == "all") {
                        $("[name^='replyButton_']").removeClass("d-none");
                        self.isAdmin = true
                    } else {
                        const userName = self.messages.userName;
                        self.isAdmin = (self.identityName === userName);
                        $("[name='replyButton_" + result + "']").removeClass("d-none");
                    }
                });              
            },
            MessageEdit() {
                $("#messageTextarea").prop("readonly", false);
                $("#messageSubmit").removeClass("d-none");
                $("#messageEdit").addClass("d-none");
            },
            MessageSubmit(id) {
                const url = "/Message/UpdateMessage";
                const data = {
                    "Id": id,
                    "Content": $("#messageTextarea").val()
                }
                Commom.PostCommonAPI(url, data).then(() => {
                    $("#messageTextarea").prop("readonly", true);
                    $("#messageSubmit").addClass("d-none");
                    $("#messageEdit").removeClass("d-none");
                });               
            },
            GetDetailContent() {
                const self = this;
                const url = "/Message/GetDetail/" + self.detailId;
                Commom.GetCommonAPI(url).then((result) => {
                    self.messages = result;
                    self.GetUserPerssion();
                })               
            },
            GetPathParam() {
                const path = window.location.href;
                var match = path.match(/\/([^/]+)$/);
                var parameter = match[1];
                return parameter;
            }
        },
    };

</script>