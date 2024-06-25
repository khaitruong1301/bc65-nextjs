import { httpApiStore } from '@/app/util/setting';
import {NextRequest,NextResponse} from 'next/server';

export async function GET(resquest) {
    let url = new URL(resquest.url)
    let params =  new URLSearchParams(url.search)
    let paramId = params.get('id') || null;
    console.log(paramId)
    try {
        //xây dựng api = nextjs 
        let urlApi = '';
        if(paramId) {
            urlApi = `/api/Product/getbyid?id=${paramId}`;
        }else {
            urlApi = `/api/Product`
        }
        const res = await httpApiStore.get(urlApi);
        return NextResponse.json(res.data, {status:200})
    }catch (err) {
        return NextResponse.json({content:'Lỗi server', status:500})
    }
} 

