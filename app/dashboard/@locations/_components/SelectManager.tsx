'use client'

import { Select, SelectItem } from "@heroui/react"
import { Location, Manager } from "@/entities"

interface SelectManagerProps{
   managers: Manager[],
   locations: Location[],
   defaultManager?: string
}

export default function SelectManager({managers, locations, defaultManager}:SelectManagerProps){
   const disabledKeys = locations.map((location: Location)=>{
      return location.managerId?.managerId
   }).filter((managerId)=>managerId!== undefined )
   return(
      <Select defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : []} label="Manager" name="managerId" disabledKeys={disabledKeys} >
         {
            managers.map((manager: Manager)=>{
               return(
                  <SelectItem key={manager.managerId}>{manager.managerFullName}</SelectItem>
               )
            })
         }
      </Select>
   )
}