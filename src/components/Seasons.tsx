import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export function Seasons() {
  return (
    <Menubar className="flex w-full items-center justify-between rounded-lg border bg-white px-2 py-2 shadow-sm">
      <MenubarMenu>
        <MenubarTrigger className="rounded-md px-4 py-2 hover:bg-purple-100 hover:text-purple-600">Spring</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Strawberries
            </MenubarItem>  
            <MenubarItem>
              Apricots
            </MenubarItem>
            <MenubarItem>
              Cherries
            </MenubarItem>
    
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="rounded-md px-4 py-2 hover:bg-purple-100 hover:text-purple-600">Summer</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Watermelons
            </MenubarItem>
            <MenubarItem>
              Peaches
            </MenubarItem>
            <MenubarItem>
              Blueberries
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="rounded-md px-4 py-2 hover:bg-purple-100 hover:text-purple-600">Autumn</MenubarTrigger>
        <MenubarContent className="w-44">
          <MenubarGroup>
            <MenubarItem>
              Apples
            </MenubarItem>
            <MenubarItem>
              Pears
            </MenubarItem>
            <MenubarItem>
              Figs
            </MenubarItem>            
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="rounded-md px-4 py-2 hover:bg-purple-100 hover:text-purple-600">Winter</MenubarTrigger>
        <MenubarContent>
            <MenubarItem>
              Oranges
            </MenubarItem>
            <MenubarItem>
              Grapefruits
            </MenubarItem>
            <MenubarItem>
              Pomegranates
            </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
