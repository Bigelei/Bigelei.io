import requset from "./request"
export async function getProject() {
    return await requset.get("/api/project")
}